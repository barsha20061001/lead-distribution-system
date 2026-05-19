import mongoose, { Schema, models } from "mongoose";

const LeadAssignmentSchema = new Schema(
  {
    leadId: {
      type: Schema.Types.ObjectId,
      ref: "Lead",
      required: true,
    },

    providerId: {
      type: Schema.Types.ObjectId,
      ref: "Provider",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

LeadAssignmentSchema.index(
  { leadId: 1, providerId: 1 },
  { unique: true }
);

export const LeadAssignment =
  models.LeadAssignment ||
  mongoose.model("LeadAssignment", LeadAssignmentSchema);

  