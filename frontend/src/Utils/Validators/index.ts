import validator from "validator";

export const isNameValid = (name: string): boolean => {
  if (name.length && name.length < 3) return false;
  return true;
};

export const isEmailValid = (email: string): boolean => {
  if (email && !validator.isEmail(email)) return false;
  return true;
};
