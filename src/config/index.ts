import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
import * as schema from "../db/schemas/index";

// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL!,
// });

const sqlite = new Database("../public/sqlite.db");

// export const db = drizzle({
//     client: pool,
//     schema: schema,
// });

sqlite.run("PRAGMA journal_mode = WAL;");

export const db = drizzle(sqlite, { schema });