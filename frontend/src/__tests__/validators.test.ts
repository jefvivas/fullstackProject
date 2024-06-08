import { isNameValid, isEmailValid } from "../Utils/Validators";

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
