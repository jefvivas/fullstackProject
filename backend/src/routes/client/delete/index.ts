import { Response, Request, Router } from "express";
import getClients from "../../../services/getClients";
import deleteClient from "../../../services/deleteClient";

const route = Router();

route.delete("/client/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(400).send({ message: "id is required" });
  await deleteClient(id);
  return res.status(200).send({ message: "client deleted" });
});

export default route;
