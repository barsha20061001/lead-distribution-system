import mongoose, { Schema, models } from "mongoose";

const WebhookEventSchema = new Schema(
  {
    eventId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export const WebhookEvent =
  models.WebhookEvent ||
  mongoose.model("WebhookEvent", WebhookEventSchema);

  