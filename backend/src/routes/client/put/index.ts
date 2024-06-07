import { Response, Request, Router } from "express";
import getClientById from "../../../services/getClientById";
import updateClient from "../../../services/updateClient";

const route = Router();

route.put("/client/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedClient = req.body;

  if (!updatedClient.name || !updatedClient.email || !updatedClient.tags)
    return res
      .status(400)
      .send({ message: "name, email and tags are required" });

  if (!id) return res.status(400).send({ message: "id is required" });

  const existingUser = await getClientById(id);
  if (!existingUser)
    return res.status(400).send({ message: "user does not exist" });

  await updateClient(id, updatedClient);
  return res.status(201).send({ message: "client updated" });
});

export default route;
