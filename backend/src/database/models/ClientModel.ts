import mongoose from "mongoose";
import { IClient } from "../../types";

const { Schema, model } = mongoose;

const clientSchema = new Schema<IClient>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    tags: { type: [String], required: false },
  },
  { versionKey: false, timestamps: true }
);

export const Client = model<IClient>("Client", clientSchema);
