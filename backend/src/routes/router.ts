import { Router } from "express";
import postClient from "./client/post";
import getClients from "./client/get";
import deleteClient from "./client/delete";
import putClient from "./client/put";

const route = Router();

route.use("/", postClient);
route.use("/", getClients);
route.use("/", deleteClient);
route.use("/", putClient);

export default route;
