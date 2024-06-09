import { Router } from "express";
import postClient from "./client/post";
import getClients from "./client/get";
import deleteClient from "./client/delete";
import putClient from "./client/put";
import postAdmin from "./admin/post";
import tokenAuthorization from "../middlewares";

const route = Router();

route.use("/", postAdmin);

route.use("/", tokenAuthorization);

route.use("/", postClient);
route.use("/", getClients);
route.use("/", deleteClient);
route.use("/", putClient);

export default route;
