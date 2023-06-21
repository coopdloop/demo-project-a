import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv"; 
dotenv.config();

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  user: process.env.DB_USER!,
  password: process.env.DB_PWD,
  host: process.env.DB_HOST!,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME!
} satisfies Config;