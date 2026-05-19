import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Provider } from "@/models/Provider";
import { LeadAssignment } from "@/models/LeadAssignment";

export async function GET() {
  try {
    await connectDB();

    const providers = await Provider.find().sort({ name: 1 });

    const dashboardData = await Promise.all(
      providers.map(async (provider) => {
        const assignments = await LeadAssignment.find({
          providerId: provider._id,
        })
          .populate({
            path: "leadId",
            populate: {
              path: "serviceId",
              model: "Service",
            },
          })
          .sort({ createdAt: -1 });

        return {
          _id: provider._id,
          name: provider.name,
          monthlyQuota: provider.monthlyQuota,
          usedQuota: provider.usedQuota,
          remainingQuota: provider.monthlyQuota - provider.usedQuota,
          leads: assignments.map((a: any) => ({
            name: a.leadId?.name,
            phone: a.leadId?.phone,
            city: a.leadId?.city,
            service: a.leadId?.serviceId?.name,
            description: a.leadId?.description,
          })),
        };
      })
    );

    return NextResponse.json({
      success: true,
      data: dashboardData,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}

