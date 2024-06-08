import { Client } from "../../database/models/ClientModel";

const deleteClient = async (id: string) => {
  const { deletedCount } = await Client.deleteOne({ _id: id });
  if (deletedCount > 0) return "Client deleted";

  return "Client not found";
};

export default deleteClient;
