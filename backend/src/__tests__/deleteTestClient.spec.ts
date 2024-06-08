import deleteTestClients from "../services/deleteTestClients";
import { Client } from "../database/models/ClientModel";

describe("deleteTestClients tests", () => {
  test("teste positive case", async () => {
    const desiredResponse = "Test clients deleted";

    Client.deleteMany = jest.fn().mockResolvedValue({ deletedCount: 1 });
    const response = await deleteTestClients();
    expect(response).toBe(desiredResponse);
  });

  test("test negative case", async () => {
    Client.deleteMany = jest.fn().mockRejectedValueOnce(new Error());

    await expect(deleteTestClients()).rejects.toThrow(
      "Could not delete test clients"
    );
  });

  test("test when no test client is found case", async () => {
    const desiredResponse = "Test clients not found";

    Client.deleteMany = jest.fn().mockResolvedValue({ deletedCount: 0 });
    const response = await deleteTestClients();
    expect(response).toBe(desiredResponse);
  });
});
