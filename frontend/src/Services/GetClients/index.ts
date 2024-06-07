import axios from "axios";
import { Client } from "../../Interfaces/client";

export const getAllClients = async (): Promise<Client[]> => {
  const response = await axios.get("http://localhost:1111/client");
  return response.data.clients;
};
