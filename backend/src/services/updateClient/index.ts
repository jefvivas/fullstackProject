import { Client } from "../../database/models/ClientModel";
import { IClient } from "../../types";

const updateClient = async (id: string, client: IClient): Promise<string> => {
  try {
    const { modifiedCount } = await Client.updateOne(
      { _id: id },
      {
        $set: client,
      }
    );

    if (modifiedCount === 0) return "Client not found";
    return "Client updated";
  } catch (error) {
    throw new Error("Could not update client");
  }
};

export default updateClient;
