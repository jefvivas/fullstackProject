import getAdminByEmail from "../services/getAdminByEmail";
import { Admin } from "../database/models/AdminModel";

describe("GetAdminByEmail tests", () => {
  const mockedAdmin = {
    email: "someMail@mail.com",
    password: "somePass",
  };
  test("teste positive case", async () => {
    Admin.findOne = jest.fn().mockResolvedValue(mockedAdmin);
    const clientFound = await getAdminByEmail(mockedAdmin.email);
    expect(clientFound).toBe(mockedAdmin);
  });

  test("test negative case", async () => {
    Admin.findOne = jest.fn().mockRejectedValueOnce(new Error());

    await expect(getAdminByEmail(mockedAdmin.email)).rejects.toThrow(
      "Could not fetch admin"
    );
  });
});
