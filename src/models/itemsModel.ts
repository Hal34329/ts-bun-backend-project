import { type InferSelectModel } from "drizzle-orm";
import { items } from "../db/schemas";

export type ItemsData = InferSelectModel<typeof items>;

// interface Initial {
//     value: {
//         name: string
//     }
// }

// export class itemsModel {
//     // TODO: Borrar interfaz y lógica hardcodeada una vez definidas las rutas
//     static async getFirst(): Promise<Initial> {
//         return { value: { name: "hi" } };
//     }
// }