import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Provider } from "@/models/Provider";
import { WebhookEvent } from "@/models/WebhookEvent";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { eventId } = await req.json();

    try {
      await WebhookEvent.create({ eventId });
    } catch (error: any) {
      if (error.code === 11000) {
        return NextResponse.json({
          success: true,
          message:
            "Webhook already processed. Duplicate ignored safely.",
        });
      }

      throw error;
    }

    await Provider.updateMany({}, { usedQuota: 0 });

    return NextResponse.json({
      success: true,
      message: "Quota reset successfully through webhook",
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