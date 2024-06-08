import { Client } from "../../database/models/ClientModel";

const getClients = async () => {
  try {
    const clients = await Client.find();
    return clients;
  } catch (error) {
    throw new Error("Could not fetch clients");
  }
};

export default getClients;
