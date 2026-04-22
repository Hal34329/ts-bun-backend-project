// Modelo tiene llamadas a la base de datos, servicios tiene la lógica
import { db } from "../config/index";
import { items } from "./schemas/index";

const main = async (): Promise<void> => {
    console.log("🌱 Insertando nuevos items...");
    await db.insert(items).values([
        { name: "Gansito", price: 1550, stock: 10 },
        { name: "Coca-Cola 600ml", price: 1800, stock: 24 },
        { name: "Sabritas Original", price: 1700, stock: 15 },
    ]).onConflictDoNothing();

    console.log("✅ Seed finalizado");
};

main();