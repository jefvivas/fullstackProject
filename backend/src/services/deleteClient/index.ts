import { Client } from "../../database/models/ClientModel";

const deleteClient = async (id: string) => {
  await Client.deleteOne({ _id: id });
  return;
};

export default deleteClient;
