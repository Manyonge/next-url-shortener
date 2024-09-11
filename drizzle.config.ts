import './envConfig'
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: 'postgresql',
  url: process.env.DATABASE_URL
});
