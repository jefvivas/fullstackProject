import { getUsersFromLocalStorage } from "../Services/GetClients";
import "jest-localstorage-mock";

describe("Test getUsersFromLocalStorage function", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should retrieve the existing user from the local storage", () => {
    const existingUser = {
      name: "someName",
      email: "someMail",
      phone: "11111111",
      cpf: "12345678911",
    };
    localStorage.setItem("users", JSON.stringify(existingUser));
    const users = getUsersFromLocalStorage();

    expect(users).toEqual(existingUser);
  });

  it("should retrieve and empty array from the local storage", () => {
    const users = getUsersFromLocalStorage();

    expect(users).toEqual([]);
  });
});
