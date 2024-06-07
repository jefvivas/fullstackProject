import mongoose from "mongoose";
import deleteTestClients from "../services/deleteTestClients";

const connectDatabase = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1/clients");
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

const deleteTestClientsMigrations = async () => {
  await connectDatabase();

  try {
    await deleteTestClients();
    console.log("Clients deleted successfully");
  } catch (error) {
    console.error("Error deleting clients", error);
  } finally {
    await closeDatabase();
    process.exit(0);
  }
};

deleteTestClientsMigrations();

export default deleteTestClientsMigrations;
