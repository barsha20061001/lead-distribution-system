import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

import { connectDB } from "@/lib/mongodb";

import { Service } from "@/models/Service";
import { Provider } from "@/models/Provider";
import { Lead } from "@/models/Lead";
import { LeadAssignment } from "@/models/LeadAssignment";
import { AllocationState } from "@/models/AllocationState";

const mandatoryProviders: Record<string, string[]> = {
  "Service 1": ["Provider 1"],
  "Service 2": ["Provider 5"],
  "Service 3": ["Provider 1", "Provider 4"],
};

const providerPools: Record<string, string[]> = {
  "Service 1": ["Provider 2", "Provider 3", "Provider 4"],

  "Service 2": ["Provider 6", "Provider 7", "Provider 8"],

  "Service 3": [
    "Provider 2",
    "Provider 3",
    "Provider 5",
    "Provider 6",
    "Provider 7",
    "Provider 8",
  ],
};

export async function POST(req: NextRequest) {
  const session = await mongoose.startSession();

  try {
    await connectDB();

    const body = await req.json();

    const { name, phone, city, service, description } = body;

    let responseData: any = {};

    await session.withTransaction(async () => {
      const serviceDoc = await Service.findOne({
        name: service,
      });

      if (!serviceDoc) {
        throw new Error("Service not found");
      }

      const existingLead = await Lead.findOne({
        phone,
        serviceId: serviceDoc._id,
      });

      if (existingLead) {
        throw new Error(
          "Duplicate lead: same phone cannot request same service again"
        );
      }

      const lead = await Lead.create(
        [
          {
            name,
            phone,
            city,
            description,
            serviceId: serviceDoc._id,
          },
        ],
        { session }
      );

      const assignedProviders: any[] = [];

      const mandatory = mandatoryProviders[service];

      for (const providerName of mandatory) {
        const provider = await Provider.findOne({
          name: providerName,
        });

        if (
          provider &&
          provider.usedQuota < provider.monthlyQuota
        ) {
          assignedProviders.push(provider);
        }
      }

      const remainingSlots = 3 - assignedProviders.length;

      if (remainingSlots > 0) {
        const allocationState =
          await AllocationState.findOne({
            serviceName: service,
          });

        const pool = providerPools[service];

        let index = allocationState.lastIndex;

        let count = 0;

        while (
          assignedProviders.length < 3 &&
          count < pool.length
        ) {
          const providerName =
            pool[index % pool.length];

          const provider = await Provider.findOne({
            name: providerName,
          });

          const alreadyAssigned = assignedProviders.find(
            (p) =>
              p._id.toString() === provider._id.toString()
          );

          if (
            provider &&
            !alreadyAssigned &&
            provider.usedQuota < provider.monthlyQuota
          ) {
            assignedProviders.push(provider);
          }

          index++;
          count++;
        }

        allocationState.lastIndex = index % pool.length;

        await allocationState.save({ session });
      }

      if (assignedProviders.length !== 3) {
        throw new Error(
          "Could not assign exactly 3 providers"
        );
      }

      for (const provider of assignedProviders) {
        await LeadAssignment.create(
          [
            {
              leadId: lead[0]._id,
              providerId: provider._id,
            },
          ],
          { session }
        );

        provider.usedQuota += 1;

        await provider.save({ session });
      }

      responseData = {
        success: true,
        message: "Lead created successfully",
        providers: assignedProviders.map(
          (p) => p.name
        ),
      };
    });

    session.endSession();

    return NextResponse.json(responseData);
  } catch (error: any) {
    session.endSession();

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}

