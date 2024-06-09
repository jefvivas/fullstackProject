import { toast } from "react-toastify";
import { Client } from "../../Interfaces/client";
import axios from "axios";

export const editClient = async (client: Client): Promise<string> => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const { data } = await axios.put(
      `http://localhost:1111/client/${client._id}`,
      {
        name: client.name,
        email: client.email,
        tags: client.tags,
      },
      { headers }
    );
    toast.success("Cliente editado com sucesso");
    return data.message;
  } catch (error: any) {
    toast.error("Erro ao editar cliente");
    return "";
  }
};
