import { Response, Request, Router } from "express";
import insertClient from "../../../services/insertClient";
import getClientByEmail from "../../../services/getClientByEmail";

const route = Router();

route.post("/client", async (req: Request, res: Response) => {
  const { name, email, tags } = req.body;

  if (!name || !email || !tags)
    return res
      .status(400)
      .send({ message: "name, email and tags are required" });

  const existingClient = await getClientByEmail(email);
  if (existingClient)
    return res.status(400).send({ message: "Client already exists" });

  tags.push("new_client");
  const client = await insertClient({ name, email, tags });
  return res.status(201).send({ message: "Client created", client });
});

export default route;
