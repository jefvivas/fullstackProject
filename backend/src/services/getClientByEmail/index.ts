import { Client } from "../../database/models/ClientModel";
import { IClient } from "../../types";

const getClientByEmail = async (email: string): Promise<IClient | null> => {
  try {
    const clients = await Client.findOne({ email });
    return clients;
  } catch (error) {
    throw new Error("Could not fetch client");
  }
};

export default getClientByEmail;
