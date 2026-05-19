import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Service } from "@/models/Service";
import { Provider } from "@/models/Provider";
import { AllocationState } from "@/models/AllocationState";

export async function GET() {
  try {
    await connectDB();

    await Service.deleteMany({});
    await Provider.deleteMany({});
    await AllocationState.deleteMany({});

    await Service.insertMany([
      { name: "Service 1" },
      { name: "Service 2" },
      { name: "Service 3" },
    ]);

    await Provider.insertMany([
      { name: "Provider 1", monthlyQuota: 10, usedQuota: 0 },
      { name: "Provider 2", monthlyQuota: 10, usedQuota: 0 },
      { name: "Provider 3", monthlyQuota: 10, usedQuota: 0 },
      { name: "Provider 4", monthlyQuota: 10, usedQuota: 0 },
      { name: "Provider 5", monthlyQuota: 10, usedQuota: 0 },
      { name: "Provider 6", monthlyQuota: 10, usedQuota: 0 },
      { name: "Provider 7", monthlyQuota: 10, usedQuota: 0 },
      { name: "Provider 8", monthlyQuota: 10, usedQuota: 0 },
    ]);

    await AllocationState.insertMany([
      { serviceName: "Service 1", lastIndex: 0 },
      { serviceName: "Service 2", lastIndex: 0 },
      { serviceName: "Service 3", lastIndex: 0 },
    ]);

    return NextResponse.json({
      success: true,
      message: "Database seeded successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Seed failed",
        error,
      },
      { status: 500 }
    );
  }
}

