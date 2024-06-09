import axios from "axios";
import { toast } from "react-toastify";
import { logAdminProps } from "../../Interfaces/admin";

export const logAdmin = async (admin: logAdminProps): Promise<string> => {
  try {
    const { data } = await axios.post("http://localhost:1111/admin", {
      email: admin.email,
      password: admin.password,
    });
    return data.token;
  } catch (error: any) {
    toast.error("Erro ao logar");
    return "";
  }
};
