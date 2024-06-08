import { Client } from "../../database/models/ClientModel";

const getClientByEmail = async (email: string) => {
  try {
    const clients = await Client.findOne({ email });
    return clients;
  } catch (error) {
    throw new Error("Could not fetch client");
  }
};

export default getClientByEmail;
