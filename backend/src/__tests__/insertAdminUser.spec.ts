import insertAdmin from "../services/insertAdmin";
import { Admin } from "../database/models/AdminModel";

describe("InsertAdmin tests", () => {
  const mockedAdminInput = {
    email: "someMail@mail.com",
    password: "somePass",
  };

  const mockedAdminOutput = {
    email: "someMail@mail.com ",
    password: "hashedPassword",
  };

  test("teste positive case", async () => {
    Admin.create = jest.fn().mockResolvedValue(mockedAdminOutput);
    const clientFound = await insertAdmin(mockedAdminInput);
    expect(clientFound).toBe(mockedAdminOutput);
  });

  test("test negative case", async () => {
    Admin.create = jest.fn().mockRejectedValueOnce(new Error());

    await expect(insertAdmin(mockedAdminInput)).rejects.toThrow(
      "Could not insert admin"
    );
  });
});
