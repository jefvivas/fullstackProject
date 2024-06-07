import { Client } from "../../database/models/ClientModel";

const deleteTestClients = async () => {
  await Client.deleteMany({ tags: { $in: ["test_client"] } });
  return;
};

export default deleteTestClients;
