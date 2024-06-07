import { Response, Request, Router } from "express";
import getClients from "../../../services/getClients";

const route = Router();

route.get("/client", async (_req: Request, res: Response) => {
  const clients = await getClients();
  return res.status(200).send({ clients });
});

export default route;
