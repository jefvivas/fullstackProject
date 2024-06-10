import emailValidator from "../utils/emailValidator";

describe("emailValidator tests", () => {
  const validMail = "mail@mail.com";
  const invalidMail = "mail@";
  test("teste positive case", async () => {
    const response = emailValidator(validMail);
    expect(response).toBe(true);
  });

  test("test negative case", async () => {
    const response = emailValidator(invalidMail);
    expect(response).toBe(false);
  });
});
