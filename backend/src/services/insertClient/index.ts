import { Client } from "../../database/models/ClientModel";
import { IClient } from "../../types";

const insertClient = async (client: IClient): Promise<IClient> => {
  try {
    const newClient = await Client.create(client);
    return newClient;
  } catch (error) {
    throw new Error("Could not insert client");
  }
};

export default insertClient;
