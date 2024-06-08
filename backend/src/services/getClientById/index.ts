import { Client } from "../../database/models/ClientModel";

const getClientById = async (id: string) => {
  try {
    const client = await Client.findOne({ _id: id });
    return client;
  } catch (error) {
    throw new Error("Could not fetch client");
  }
};

export default getClientById;
