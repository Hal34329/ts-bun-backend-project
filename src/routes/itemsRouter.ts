import { Router } from "express";
import { itemsController } from "../controllers/itemsController";

export const itemsRouter = Router();

itemsRouter.get("/", itemsController.getAll);
itemsRouter.get("/:id", itemsController.getById);
// itemsRouter.post("/");
// itemsRouter.put("/:id");
// itemsRouter.patch("/:id");
// itemsRouter.delete("/:id");