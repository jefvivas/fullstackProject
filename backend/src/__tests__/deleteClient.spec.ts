import deleteClient from "../services/deleteClient";
import { Client } from "../database/models/ClientModel";

describe("deleteClient tests", () => {
  const mockedClient = {
    _id: "666493b46c91b59ce28d1e45",
    name: "someName",
    email: "someMail",
    createdAt: "2024-06-08T17:24:04.422Z",
    updatedAt: "2024-06-08T17:43:52.787Z",
    tags: [],
  };
  test("teste positive case", async () => {
    const desiredResponse = "Client deleted";

    Client.deleteOne = jest.fn().mockResolvedValue({ deletedCount: 1 });
    const response = await deleteClient(mockedClient._id);
    expect(response).toBe(desiredResponse);
  });

  test("test negative case", async () => {
    Client.deleteOne = jest.fn().mockRejectedValueOnce(new Error());

    await expect(deleteClient(mockedClient._id)).rejects.toThrow(
      "Could not delete client"
    );
  });

  test("test when no client is found case", async () => {
    const desiredResponse = "Client not found";

    Client.deleteOne = jest.fn().mockResolvedValue({ deletedCount: 0 });
    const response = await deleteClient(mockedClient._id);
    expect(response).toBe(desiredResponse);
  });
});
