import { Client } from "../../database/models/ClientModel";

const deleteClient = async (id: string): Promise<string> => {
  try {
    const { deletedCount } = await Client.deleteOne({ _id: id });
    if (deletedCount > 0) return "Client deleted";

    return "Client not found";
  } catch (error) {
    throw new Error("Could not delete client");
  }
};

export default deleteClient;
