import hashChecker from "../utils/hashChecker";
import bcrypt from "bcryptjs";

describe("hashChecker tests", () => {
  const password = "somePassword";
  const hashedPassword = "hashedPassword";
  const notHashedPassword = "notHashedPassword";
  test("teste positive case", async () => {
    bcrypt.compareSync = jest.fn().mockReturnValue(true);
    const response = hashChecker(password, hashedPassword);
    expect(response).toBe(true);
  });

  test("test negative case", async () => {
    bcrypt.compareSync = jest.fn().mockReturnValue(false);
    const response = hashChecker(password, notHashedPassword);
    expect(response).toBe(false);
  });
});
