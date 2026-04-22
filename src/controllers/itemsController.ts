import { type Request, type Response } from "express";
import { itemsService } from "../services/itemsService";

export class itemsController {
    static getAll = async (_req: Request, res: Response): Promise<Response> => {
        const data = await itemsService.getAll();
        return res.json(data);
    };

    static getById = async(req: Request, res: Response): Promise<Response> => {
        const id = Number(req.params.id);
        const item = await itemsService.getById(id);

        if(!item)
            return res.status(404).json({ error: "Producto no encontrado" });
        return res.json(item);
    };
}