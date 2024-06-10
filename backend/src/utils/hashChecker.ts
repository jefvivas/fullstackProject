import bcrypt from "bcryptjs";

const hashChecker = (password: string, hashedPassword: string) => {
  const isValid = bcrypt.compareSync(password, hashedPassword);
  return isValid;
};

export default hashChecker;
