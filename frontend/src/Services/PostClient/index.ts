import { toast } from "react-toastify";
import { PostClientInput, PostClientOutput } from "../../Interfaces/client";
import axios from "axios";

export const postClient = async (
  client: PostClientInput
): Promise<PostClientOutput> => {
  try {
    const { data } = await axios.post(`http://localhost:1111/client`, {
      name: client.name,
      email: client.email,
      tags: [],
    });
    toast.success("Cliente criado com sucesso");

    return data.client;
  } catch (error: any) {
    toast.success("Erro ao criar cliente");

    return {} as PostClientOutput;
  }
};
