import mongoose from "mongoose";
import { IAdmin } from "../../types";

const { Schema, model } = mongoose;

const adminSchema = new Schema<IAdmin>(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { versionKey: false }
);

export const Admin = model<IAdmin>("Admin", adminSchema);
