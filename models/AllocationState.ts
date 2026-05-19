import mongoose, { Schema, models } from "mongoose";

const AllocationStateSchema = new Schema(
  {
    serviceName: {
      type: String,
      required: true,
      unique: true,
    },

    lastIndex: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const AllocationState =
  models.AllocationState ||
  mongoose.model("AllocationState", AllocationStateSchema);

  