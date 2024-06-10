import mongoose from "mongoose";
import insertAdmin from "../services/insertAdmin";

const connectDatabase = async () => {
  try {
    await mongoose.connect("mongodb://mongo/clients");
    console.log("DB ONLINE");
  } catch (error) {
    console.error("Error connecting to database", error);
    process.exit(1);
  }
};

const closeDatabase = async () => {
  try {
    await mongoose.disconnect();
    console.log("DB OFFLINE");
  } catch (error) {
    console.error("Error disconnecting from database", error);
  }
};

const insertAdminUser = async () => {
  await connectDatabase();

  try {
    await insertAdmin({ email: "admin@admin.com", password: "admin123" });
    console.log("Admin created successfully");
  } catch (error) {
    console.error("Error creating admin", error);
  } finally {
    await closeDatabase();
    process.exit(0);
  }
};

insertAdminUser();

export default insertAdminUser;
