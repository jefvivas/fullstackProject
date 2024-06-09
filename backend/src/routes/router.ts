import { Router } from "express";
import postClient from "./client/post";
import getClients from "./client/get";
import deleteClient from "./client/delete";
import putClient from "./client/put";
import postAdmin from "./admin/post";

const route = Router();

route.use("/", postClient);
route.use("/", getClients);
route.use("/", deleteClient);
route.use("/", putClient);
route.use("/", postAdmin);

export default route;
