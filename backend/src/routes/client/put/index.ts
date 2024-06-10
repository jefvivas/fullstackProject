import { Response, Request, Router } from "express";
import getClientById from "../../../services/getClientById";
import updateClient from "../../../services/updateClient";
import emailValidator from "../../../utils/emailValidator";

const route = Router();

route.put("/client/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedClient = req.body;

  if (!updatedClient.name || !updatedClient.email || !updatedClient.tags)
    return res
      .status(400)
      .send({ message: "Name, email and tags are required" });

  if (!id) return res.status(400).send({ message: "Id is required" });

  if (updatedClient.name.length < 3)
    return res
      .status(400)
      .send({ message: "Name must be at least 3 characters long" });

  if (!emailValidator(updatedClient.email))
    return res.status(400).send({ message: "Email is not valid" });

  const existingClient = await getClientById(id);
  if (!existingClient)
    return res.status(400).send({ message: "Client does not exist" });

  const message = await updateClient(id, updatedClient);
  return res.status(201).send({ message });
});

export default route;
