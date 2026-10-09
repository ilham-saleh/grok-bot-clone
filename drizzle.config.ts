import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: [".env.local", ".env"] });

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error("Set DATABASE_URL in .env.local or .env before running Drizzle Kit.");
}

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl,
  },
  schemaFilter: ["public"],
  tablesFilter: ["users", "posts"],
});
