import { Client } from "../../database/models/ClientModel";
import { IClient } from "../../types";

const getClientById = async (id: string): Promise<IClient | null> => {
  try {
    const client = await Client.findOne({ _id: id });
    return client;
  } catch (error) {
    throw new Error("Could not fetch client");
  }
};

export default getClientById;
