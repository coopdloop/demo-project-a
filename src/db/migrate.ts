import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { connection } from "@/db/connection";

const db: PostgresJsDatabase = drizzle(connection(1));

export const migratedb = async () => {
  await migrate(db, { migrationsFolder: "drizzle" });
};
