import { deleteClient } from "../Services/DeleteClient";
import axios from "axios";
import "jest-localstorage-mock";

describe("Test deleteClient function", () => {
  const existingClient = {
    name: "someName",
    email: "someMail",
    tags: ["new_client"],
    createdAt: "2024-06-09T15:41:22.697Z",
    updatedAt: "2024-06-09T15:41:22.697Z",
    _id: "6665cd22ff216f0c0c9454df",
  };

  it("should delete an user", async () => {
    axios.delete = jest
      .fn()
      .mockResolvedValue({ data: { message: "Client deleted" } });
    const message = await deleteClient(existingClient._id);

    expect(message).toEqual("Client deleted");
  });

  it("should not delete an user when not finding it", async () => {
    axios.delete = jest.fn().mockRejectedValue(new Error("Error"));

    const response = await deleteClient(existingClient._id);

    expect(response).toBe("");
  });
});
