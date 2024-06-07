import { Client } from "../../database/models/ClientModel";

const getClientByEmail = async (email: string) => {
  const clients = await Client.findOne({ email });
  return clients;
};

export default getClientByEmail;
