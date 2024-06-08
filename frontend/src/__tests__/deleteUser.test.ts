import { deleteClient } from "../Services/DeleteClient";
import { postClient } from "../Services/PostClient";
import axios from "axios";

jest.mock("axios");

describe("Test deleteClient function", () => {
  const newClient = {
    name: "someName",
    email: "someMail",
  };

  const nonExistingClient = {
    name: "notAName",
    email: "notAMail",
    _id: "6662062d333422d36d18fd1d",
  };

  it("should delete an user", async () => {
    const client = await postClient(newClient.name, newClient.email);
    const { message } = await deleteClient(client._id);

    expect(message).toEqual("Client deleted");
  });

  it("should not delete an user when not finding it", async () => {
    await deleteClient(nonExistingClient._id);

    expect(deleteClient).toThrow();
  });

  // it("Should return an empty object when failing to delete an user", () => {
  //   localStorage.clear();
  //   jest.spyOn(localStorage, "getItem").mockImplementation(() => {
  //     throw new Error("SomeError");
  //   });

  //   const deletedUser = deleteUser(newUser);
  //   expect(deletedUser).toEqual({});
  // });
});
