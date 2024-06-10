import getClientByEmail from "../services/getClientByEmail";
import { Client } from "../database/models/ClientModel";

describe("GetClientByEmail tests", () => {
  const mockedClient = {
    _id: "666493b46c91b59ce28d1e45",
    name: "someName",
    email: "someMail@mail.com",
    tags: ["some_tag"],
    createdAt: "2024-06-08T17:24:04.422Z",
    updatedAt: "2024-06-08T17:43:52.787Z",
  };
  test("teste positive case", async () => {
    Client.findOne = jest.fn().mockResolvedValue(mockedClient);
    const clientFound = await getClientByEmail(mockedClient.email);
    expect(clientFound).toBe(mockedClient);
  });

  test("test negative case", async () => {
    Client.findOne = jest.fn().mockRejectedValueOnce(new Error());

    await expect(getClientByEmail(mockedClient.email)).rejects.toThrow(
      "Could not fetch client"
    );
  });
});
