import { postClient } from "../Services/PostClient";
import axios from "axios";
import "jest-localstorage-mock";

describe("Test postClient function", () => {
  const newClientInput = {
    name: "someName",
    email: "someMail",
  };

  const newClientOutput = {
    name: "someName",
    email: "someMail",
    tags: ["new_client"],
    createdAt: "2024-06-09T15:41:22.697Z",
    updatedAt: "2024-06-09T15:41:22.697Z",
    _id: "6665cd22ff216f0c0c9454df",
  };
  it("should create a new user", async () => {
    axios.post = jest
      .fn()
      .mockResolvedValue({ data: { client: newClientOutput } });
    const createdUser = await postClient({
      name: newClientInput.name,
      email: newClientInput.email,
    });

    expect(createdUser).toEqual(newClientOutput);
  });

  it("should not create a new user", async () => {
    axios.post = jest.fn().mockRejectedValue(new Error("Error"));

    const response = await postClient({
      name: newClientInput.name,
      email: newClientInput.email,
    });

    expect(response).toEqual({});
  });
});
