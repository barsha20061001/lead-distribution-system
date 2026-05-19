import mongoose, { Schema, models } from "mongoose";

const ProviderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    monthlyQuota: {
      type: Number,
      default: 10,
    },

    usedQuota: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Provider =
  models.Provider || mongoose.model("Provider", ProviderSchema);

  