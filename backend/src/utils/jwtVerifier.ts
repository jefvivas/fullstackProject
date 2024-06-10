import jwt from "jsonwebtoken";

const jwtVerifier = (token: string) => {
  const decoded = jwt.verify(token, "some_secret");
  return decoded;
};

export default jwtVerifier;
