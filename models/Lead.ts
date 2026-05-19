import mongoose, { Schema, models } from "mongoose";

const LeadSchema = new Schema(
  {
    name: String,

    phone: {
      type: String,
      required: true,
    },

    city: String,

    description: String,

    serviceId: {
      type: Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

LeadSchema.index(
  { phone: 1, serviceId: 1 },
  { unique: true }
);

export const Lead =
  models.Lead || mongoose.model("Lead", LeadSchema);

  