import {
  isCpfValid,
  isNameValid,
  isEmailValid,
  isPhoneValid,
} from "../Utils/Validators";
describe("testing cpf validator for input color", () => {
  it("should return true when receiving a valid cpf", () => {
    const validCpf = isCpfValid("15482310701");
    expect(validCpf).toBe(true);
  });

  it("should return false when receiving an invalid cpf", () => {
    const invalidCpf = isCpfValid("15482310705");
    expect(invalidCpf).toBe(false);
  });
});

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

describe("testing phone validator for input color", () => {
  it("should return true when receiving a valid phone", () => {
    const validPhone = isPhoneValid("2112341234");
    expect(validPhone).toBe(true);
  });

  it("should return false when receiving an invalid email", () => {
    const invalidPhone = isPhoneValid("259999999");
    expect(invalidPhone).toBe(false);
  });
});
