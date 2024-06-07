import { deleteUser } from "../Services/DeleteClient";
import { postUser } from "../Services/PostClient";

import "jest-localstorage-mock";

describe("Test deleteUser function", () => {
  const newUser = {
    name: "someName",
    email: "someMail",
    phone: "11111111",
    cpf: "12345678911",
  };

  const nonExistingUSer = {
    name: "notAName",
    email: "notAMail",
    phone: "22222222",
    cpf: "0000000000",
  };

  it("should delete an user", () => {
    postUser(newUser);

    const deleted = deleteUser(newUser);

    expect(deleted).toEqual(newUser);
  });

  it("should not delete an user when not finding it", () => {
    const deleted = deleteUser(nonExistingUSer);

    expect(deleted).toEqual({});
  });

  it("Should return an empty object when failing to delete an user", () => {
    localStorage.clear();
    jest.spyOn(localStorage, "getItem").mockImplementation(() => {
      throw new Error("SomeError");
    });

    const deletedUser = deleteUser(newUser);
    expect(deletedUser).toEqual({});
  });
});
