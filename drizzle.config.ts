import { defineConfig } from "drizzle-kit";

export default defineConfig({
    out: "./drizzle",
    schema: "./src/db/schemas/index.ts",
    dialect: "sqlite",
    dbCredentials: {
        url: "file:./public/sqlite.db",
    },
});