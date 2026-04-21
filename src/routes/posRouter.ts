import { Router } from "express";
import { posController } from "../controllers/posController";

export const posRouter = Router();

// posRouter.get("/initial-data", WarframeController.getInitial);
// posRouter.get("/warframes/:id", WarframeController.getCosmetics);
// posRouter.get("/global-cosmetics", WarframeController.getAccesories);

// TODO: Añadir rutas y cambiar la función del controlador
posRouter.get("/", posController.getFirst);