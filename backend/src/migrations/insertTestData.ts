import insertClient from "../services/insertClient";
import mongoose from "mongoose";

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

const insertTestClientsMigrations = async () => {
  await connectDatabase();

  try {
    for (let i = 0; i < 5; i++) {
      await insertClient({
        name: `Client ${i}`,
        email: `client${i}@mail.com`,
        tags: ["test_client"],
      });
    }
    console.log("Clients inserted successfully");
  } catch (error) {
    console.error("Error inserting clients", error);
  } finally {
    await closeDatabase();
    process.exit(0);
  }
};

insertTestClientsMigrations();

export default insertTestClientsMigrations;
