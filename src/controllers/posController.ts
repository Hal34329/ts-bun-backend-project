import { type Request, type Response } from "express";
import { posModel } from "../models/posModel";

export class posController {
    static async getFirst(_req: Request, res: Response): Promise<Response> {
        const first = await posModel.getFirst();
        if(!first)
            return res.status(404).json({ error: "Data not found" });

        return res.json(first);
    }
}