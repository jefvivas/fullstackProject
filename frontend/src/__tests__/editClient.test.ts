import { Client } from "../Interfaces/client";
import { editClient } from "../Services/EditClient";
import axios from "axios";
import "jest-localstorage-mock";

describe("Test editClient function", () => {
  const clientToEdit: Client = {
    name: "someName",
    email: "someMail",
    tags: [],
    _id: "6665cd22ff216f0c0c9454df",
  };

  it("should edit an user", async () => {
    axios.put = jest
      .fn()
      .mockResolvedValue({ data: { message: "Client Updated" } });
    const response = await editClient(clientToEdit);

    expect(response).toEqual("Client Updated");
  });

  it("should not edit any client", async () => {
    axios.put = jest.fn().mockRejectedValue(new Error("Error"));

    const response = await editClient(clientToEdit);

    expect(response).toBe("");
  });
});
