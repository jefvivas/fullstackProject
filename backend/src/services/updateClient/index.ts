import { Client } from "../../database/models/ClientModel";
import { IClient } from "../../types";

const updateClient = async (id: string, client: IClient) => {
  const newClient = await Client.updateOne(
    { _id: id },
    {
      $set: client,
    }
  );
  return newClient;
};

export default updateClient;
