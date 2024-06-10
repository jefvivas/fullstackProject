import jwt from "jsonwebtoken";

const jwtSigner = (id: string, email: string) => {
  const token = jwt.sign({ id, email }, "some_secret", { expiresIn: "1d" });

  return token;
};

export default jwtSigner;
