import { Client } from "../../database/models/ClientModel";
import { IClient } from "../../types";

const insertClient = async (client: IClient) => {
  const newClient = await Client.create(client);
  return newClient;
};

export default insertClient;
