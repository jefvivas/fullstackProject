import jwtVerifier from "../utils/jwtVerifier";
import jwt from "jsonwebtoken";
describe("jwtVerifier tests", () => {
  const token = "token";
  test("teste positive case", async () => {
    jwt.verify = jest.fn().mockReturnValue(true);
    const response = jwtVerifier(token);
    expect(response).toBe(true);
  });
});
