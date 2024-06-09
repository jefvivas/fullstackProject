import mongoose, { Document } from "mongoose";

export interface IClient {
  name: string;
  email: string;
  tags: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IAdmin {
  email: string;
  password: string;
}
