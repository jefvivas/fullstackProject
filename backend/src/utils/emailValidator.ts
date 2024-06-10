import validator from "validator";

const emailValidator = (email: string) => {
  const isValid = validator.isEmail(email);
  return isValid;
};

export default emailValidator;
