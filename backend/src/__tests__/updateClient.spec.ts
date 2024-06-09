import updateClient from "../services/updateClient";
import { Client } from "../database/models/ClientModel";

describe("updateClient tests", () => {
  const mockedClient = {
    _id: "666493b46c91b59ce28d1e45",
    name: "someName",
    email: "someMail",
    tags: [],
  };
  test("teste positive case", async () => {
    Client.updateOne = jest.fn().mockResolvedValue({ modifiedCount: 1 });
    const response = await updateClient(mockedClient._id, mockedClient);
    expect(response).toBe("Client updated");
  });

  test("test when no client is found case", async () => {
    const desiredResponse = "Client not found";

    Client.updateOne = jest.fn().mockResolvedValue({ modifiedCount: 0 });
    const response = await updateClient(mockedClient._id, mockedClient);
    expect(response).toBe(desiredResponse);
  });
  test("test negative case", async () => {
    Client.updateOne = jest.fn().mockRejectedValueOnce(new Error());

    await expect(updateClient(mockedClient._id, mockedClient)).rejects.toThrow(
      "Could not update client"
    );
  });
});
