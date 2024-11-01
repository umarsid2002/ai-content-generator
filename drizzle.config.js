import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.tsx",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://car-market_owner:x4GcBE9WmaFV@ep-white-moon-a5gjsnvs.us-east-2.aws.neon.tech/Ai-Content-Generator?sslmode=require"
  }
});