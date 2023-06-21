import postgres from "postgres";
import * as dotenv from "dotenv";
dotenv.config();

export const connection = (max: number = 1) =>
  postgres({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    max: max,
  });
