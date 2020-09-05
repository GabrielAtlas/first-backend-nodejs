import { Router } from "express";

import ServerController from "../controllers/ServerController";

const route = Router();

route.get("/status", ServerController.status);

export default route;
