import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const items = sqliteTable( "items", {
    id: integer("id").primaryKey({ autoIncrement : true }),
    name: text("name").notNull(),
    description: text("description"),
    price: integer("price").notNull(),
    stock: integer("stock").notNull().default(0),
});