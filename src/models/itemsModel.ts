import { type InferSelectModel } from "drizzle-orm";
import { items } from "../db/schemas";

export type ItemsData = InferSelectModel<typeof items>;
