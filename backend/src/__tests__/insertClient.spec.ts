import insertClient from "../services/insertClient";
import { Client } from "../database/models/ClientModel";

describe("InsertClient tests", () => {
  const mockedClient = {
    _id: "666493b46c91b59ce28d1e45",
    name: "someName",
    email: "someMail",
    createdAt: "2024-06-08T17:24:04.422Z",
    updatedAt: "2024-06-08T17:43:52.787Z",
    tags: [],
  };
  test("teste positive case", async () => {
    Client.create = jest.fn().mockResolvedValue(mockedClient);
    const clientFound = await insertClient({
      name: mockedClient.name,
      email: mockedClient.email,
      tags: [],
    });
    expect(clientFound).toBe(mockedClient);
  });

  test("test negative case", async () => {
    Client.create = jest.fn().mockRejectedValueOnce(new Error());

    await expect(
      insertClient({
        name: mockedClient.name,
        email: mockedClient.email,
        tags: [],
      })
    ).rejects.toThrow("Could not insert client");
  });
});
