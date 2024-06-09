import { toast } from "react-toastify";
import { Client } from "../../Interfaces/client";
import axios from "axios";

export const editClient = async (client: Client) => {
  try {
    await axios.put(`http://localhost:1111/client/${client._id}`, {
      name: client.name,
      email: client.email,
      tags: client.tags,
    });
    toast.success("Cliente editado com sucesso");
    return;
  } catch (error: any) {
    console.error(error);
    return {} as Client;
  }
};
