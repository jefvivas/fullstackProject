import { toast } from "react-toastify";
import { PostClientInput, PostClientOutput } from "../../Interfaces/client";
import axios from "axios";

export const postClient = async (
  client: PostClientInput
): Promise<PostClientOutput | null> => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const { data } = await axios.post(
      `http://localhost:1111/client`,
      {
        name: client.name,
        email: client.email,
        tags: [],
      },
      { headers }
    );
    toast.success("Cliente criado com sucesso");

    return data.client;
  } catch (error: any) {
    toast.error("Erro ao criar cliente");

    return null;
  }
};
