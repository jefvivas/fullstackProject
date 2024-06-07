import { editUser } from "../Services/EditClient";
import { postUser } from "../Services/PostClient";

import "jest-localstorage-mock";

describe("Test editUser function", () => {
  const newUser = {
    name: "someName",
    email: "someMail",
    phone: "11111111",
    cpf: "12345678911",
  };

  const newUser2 = {
    name: "someName2",
    email: "someMail2",
    phone: "111111112",
    cpf: "12345678912",
  };

  const editedUser = {
    name: "anotherName",
    email: "someMail",
    phone: "11111111",
    cpf: "12345678911",
  };

  it("should edit an user", () => {
    postUser(newUser);
    postUser(newUser2);

    const edited = editUser(editedUser);

    expect(edited).toEqual(editedUser);
  });

  it("Should return an empty object when failing to edit an user", () => {
    localStorage.clear();
    jest.spyOn(localStorage, "setItem").mockImplementation(() => {
      throw new Error("SomeError");
    });

    const editedUSer = editUser(editedUser);
    expect(editedUSer).toEqual({});
  });
});
