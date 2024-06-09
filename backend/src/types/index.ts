import mongoose, { Document } from "mongoose";

export interface IClient {
  name: string;
  email: string;
  tags: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IGetClientByEmail extends Document {
  _id: string;
  name: string;
  email: string;
  tags: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
