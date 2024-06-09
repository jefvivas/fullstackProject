import { getAllClients } from "../Services/GetClients";
import axios from "axios";

describe("Test getUsersFromLocalStorage function", () => {
  it("should retrieve the existing clients from database", async () => {
    const existingClient = {
      name: "someName",
      email: "someMail",
      tags: ["new_client"],
      createdAt: "2024-06-09T15:41:22.697Z",
      updatedAt: "2024-06-09T15:41:22.697Z",
      _id: "6665cd22ff216f0c0c9454df",
    };
    axios.get = jest
      .fn()
      .mockResolvedValue({ data: { clients: existingClient } });

    const users = await getAllClients();

    expect(users).toEqual(existingClient);
  });

  it("should not retrieve any client", async () => {
    axios.get = jest.fn().mockRejectedValue(new Error("Error"));

    const response = await getAllClients();

    expect(response).toEqual({});
  });
});
