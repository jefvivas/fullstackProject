import { Response, Request, Router } from "express";
import deleteClient from "../../../services/deleteClient";

const route = Router();

route.delete("/client/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(400).send({ message: "Id is required" });
  const message = await deleteClient(id);
  if (message === "Client not found") return res.status(404).send({ message });
  return res.status(200).send({ message: "Client deleted" });
});

export default route;
