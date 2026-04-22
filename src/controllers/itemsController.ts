import { type Request, type Response } from "express";
import { itemsService } from "../services/itemsService";

export class itemsController {
    static async getAll(_req: Request, res: Response): Promise<Response> {
        const data = await itemsService.getAll();
        // if (data.length === 0)
        //     return res.status(404).json({ error: "Data not found" });
        return res.json(data);
    }
}