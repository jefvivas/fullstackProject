import getClients from "../services/getClients";
import { Client } from "../database/models/ClientModel";

describe("GetClients tests", () => {
  test("teste positive case", async () => {
    const mockedClients = {
      clients: [
        {
          _id: "666493b46c91b59ce28d1e45",
          name: "someName",
          email: "someMail",
          tags: ["new_client"],
          createdAt: "2024-06-08T17:24:04.422Z",
          updatedAt: "2024-06-08T17:24:04.422Z",
        },
        {
          _id: "666493bb6c91b59ce28d1e48",
          name: "someNdame",
          email: "someM3ail",
          tags: ["new_client"],
          createdAt: "2024-06-08T17:24:11.281Z",
          updatedAt: "2024-06-08T17:24:11.281Z",
        },
      ],
    };
    Client.find = jest.fn().mockResolvedValue(mockedClients);
    const clientFound = await getClients();
    expect(clientFound).toBe(mockedClients);
  });

  test("test negative case", async () => {
    Client.find = jest.fn().mockRejectedValueOnce(new Error());

    await expect(getClients()).rejects.toThrow("Could not fetch clients");
  });
});
