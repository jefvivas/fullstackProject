import { toast } from "react-toastify";
import axios from "axios";

export const deleteClient = async (clientId: string): Promise<string> => {
  try {
    const { data } = await axios.delete(
      `http://localhost:1111/client/${clientId}`
    );
    toast.success("Cliente deletado com sucesso");
    return data.message;
  } catch (error: any) {
    toast.error("Erro ao deletar cliente");

    return "";
  }
};
