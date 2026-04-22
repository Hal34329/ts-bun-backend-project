import { Router } from "express";
import { itemsController } from "../controllers/itemsController";

export const itemsRouter = Router();

// TODO: Añadir rutas y cambiar la función del controlador
itemsRouter.get("/", itemsController.getAll);

itemsRouter.get("/", itemsController.getAll);
itemsRouter.get("/:id");
itemsRouter.post("/");
itemsRouter.put("/:id");
itemsRouter.patch("/:id");
itemsRouter.delete("/:id");