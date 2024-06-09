import { Admin } from "../../database/models/AdminModel";
import { IAdmin } from "../../types";
import bcrypt from "bcryptjs";

const insertClient = async (admin: IAdmin): Promise<IAdmin> => {
  try {
    const hashedPassword = bcrypt.hashSync(admin.password, 12);
    const newAdmin = await Admin.create({ ...admin, password: hashedPassword });
    return newAdmin;
  } catch (error) {
    throw new Error("Could not insert admin");
  }
};

export default insertClient;
