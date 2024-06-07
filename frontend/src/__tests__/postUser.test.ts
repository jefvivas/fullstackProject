import { postUser } from "../Services/PostClient";
import "jest-localstorage-mock";

describe("Test postUser function", () => {
  const newUser = {
    name: "someName",
    email: "someMail",
    phone: "11111111",
    cpf: "12345678911",
  };

  const sameEmailUser = {
    name: "someName",
    email: "someMail",
    phone: "11111111",
    cpf: "12345678912",
  };

  it("should create a new user", () => {
    const createdUser = postUser(newUser);

    expect(createdUser).toEqual(newUser);
  });

  it("Should return null when trying to create an user with same cpf", () => {
    postUser(newUser);
    const secondUser = postUser(newUser);

    expect(secondUser).toEqual(null);
  });

  it("Should return null when trying to create an user with same email", () => {
    postUser(newUser);
    const secondUser = postUser(sameEmailUser);

    expect(secondUser).toEqual(null);
  });

  it("Should return an empty object when failing", () => {
    localStorage.clear();
    jest.spyOn(localStorage, "setItem").mockImplementation(() => {
      throw new Error("SomeError");
    });

    const createdUser = postUser(newUser);
    expect(createdUser).toEqual({});
  });
});
