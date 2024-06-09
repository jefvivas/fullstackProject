import { Client } from "../../database/models/ClientModel";

const deleteTestClients = async (): Promise<string> => {
  try {
    const { deletedCount } = await Client.deleteMany({
      tags: { $in: ["test_client"] },
    });
    if (deletedCount > 0) return "Test clients deleted";
    return "Test clients not found";
  } catch (error) {
    throw new Error("Could not delete test clients");
  }
};

export default deleteTestClients;
