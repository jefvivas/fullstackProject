import { Client } from "../../database/models/ClientModel";
import { IClient } from "../../types";

const updateClient = async (id: string, client: IClient) => {
  try {
    const newClient = await Client.updateOne(
      { _id: id },
      {
        $set: client,
      }
    );
    return newClient;
  } catch (error) {
    throw new Error("Could not update client");
  }
};

export default updateClient;
