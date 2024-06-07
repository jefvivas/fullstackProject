import { toast } from "react-toastify";
import { Client } from "../../Interfaces/client";
import axios from "axios";

export const postClient = async (name: string, email: string) => {
  try {
    await axios.post(`http://localhost:1111/client`, {
      name,
      email,
      tags: ["a", "b"],
    });
    return;
  } catch (error: any) {
    console.error(error);
    return {} as Client;
  }
};
