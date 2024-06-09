import axios from "axios";
import { toast } from "react-toastify";
import { GetClientsOutput } from "../../Interfaces/client";

export const getAllClients = async (): Promise<GetClientsOutput[]> => {
  try {
    const { data } = await axios.get("http://localhost:1111/client");
    return data.clients;
  } catch (error: any) {
    toast.error("Erro ao receber cliente");

    return {} as GetClientsOutput[];
  }
};
