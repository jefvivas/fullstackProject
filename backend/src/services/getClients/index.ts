import { Client } from "../../database/models/ClientModel";
import { IClient } from "../../types";

const getClients = async (): Promise<IClient[]> => {
  try {
    const clients = await Client.find();
    return clients;
  } catch (error) {
    throw new Error("Could not fetch clients");
  }
};

export default getClients;
