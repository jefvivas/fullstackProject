import {
  isNameValid,
  isEmailValid,
  isPasswordValid,
} from "../Utils/Validators";
import "jest-localstorage-mock";

describe("testing name validator for input color", () => {
  it("should return true when receiving a name with 3 or more letters", () => {
    const validName = isNameValid("Joao");
    expect(validName).toBe(true);
  });

  it("should return false when receiving an invalid name", () => {
    const invalidName = isNameValid("Ye");
    expect(invalidName).toBe(false);
  });
});

describe("testing password validator for input color", () => {
  it("should return true when receiving a password with 3 or more letters", () => {
    const validPassword = isPasswordValid("Password");
    expect(validPassword).toBe(true);
  });

  it("should return false when receiving an invalid password", () => {
    const invalidPassword = isPasswordValid("PA");
    expect(invalidPassword).toBe(false);
  });
});

describe("testing email validator for input color", () => {
  it("should return true when receiving a valid email", () => {
    const validEmail = isEmailValid("validEmail@gmail.com");
    expect(validEmail).toBe(true);
  });

  it("should return false when receiving an invalid email", () => {
    const invalidEmail = isEmailValid("invalidEmail@gmail");
    expect(invalidEmail).toBe(false);
  });
});
