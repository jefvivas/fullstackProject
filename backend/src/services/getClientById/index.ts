import { Client } from "../../database/models/ClientModel";

const getClientById = async (id: string) => {
  const client = await Client.findOne({ _id: id });
  return client;
};

export default getClientById;
