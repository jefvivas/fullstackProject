import jwtSigner from "../utils/jwtSigner";
import jwt from "jsonwebtoken";
describe("jwtSigner tests", () => {
  const id = "someId";
  const email = "someMail@mail.com";
  test("teste positive case", async () => {
    jwt.sign = jest.fn().mockReturnValue("token");
    const response = jwtSigner(id, email);
    expect(response).toBe("token");
  });
});
