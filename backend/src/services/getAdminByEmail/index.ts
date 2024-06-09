import { Admin } from "../../database/models/AdminModel";
import { IAdmin } from "../../types";

const getAdminByEmail = async (email: string): Promise<IAdmin | null> => {
  try {
    const admin = await Admin.findOne({ email });
    return admin;
  } catch (error) {
    throw new Error("Could not fetch admin");
  }
};

export default getAdminByEmail;
