import { db } from "../config/index";
import { items } from "../db/schemas/index";
import { eq } from "drizzle-orm"; 
import { type ItemsData } from "../models/itemsModel";

// interface ItemsData {
//     id: number,
//     name: string,
//     description: string | null,
//     price: number,
//     stock: number
// }

export class itemsService {
    static getAll = async (): Promise<ItemsData[]> => {
        return await db.select().from(items);
    };

    static getById = async (id: number): Promise<ItemsData | null> => {
        const [item] = await db.select().from(items).where(eq(items.id, id));
        return item || null;
    };
}