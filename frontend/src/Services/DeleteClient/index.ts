import { toast } from "react-toastify";
import axios from "axios";

export const deleteClient = async (clientId: string): Promise<any> => {
  try {
    const response = await axios.delete(
      `http://localhost:1111/client/${clientId}`
    );
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 400) {
      throw new Error("Invalid data");
    } else {
      console.log(error);
    }
  }
};
