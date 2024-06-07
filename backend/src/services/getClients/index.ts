import { Client } from "../../database/models/ClientModel";

const getClients = async () => {
  const clients = await Client.find();
  return clients;
};

export default getClients;
