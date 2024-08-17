// drizzle.config.ts
import { PgDialect } from "drizzle-orm/pg-core";

export default {
  dialect: PgDialect,
  migrations: {
    path: "./src/lib/db/migrations",
  },
  schema: "./src/lib/db/schema.ts",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
};