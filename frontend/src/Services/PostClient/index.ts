import { toast } from "react-toastify";
import { Client } from "../../Interfaces/client";
import axios from "axios";

export const postClient = async (
  name: string,
  email: string
): Promise<Client> => {
  try {
    const response = await axios.post(`http://localhost:1111/client`, {
      name,
      email,
      tags: [],
    });
    toast.success("Client criado com sucesso");

    return response.data.client as Client;
  } catch (error: any) {
    console.error(error);
    return {} as Client;
  }
};
