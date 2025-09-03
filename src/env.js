import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
      UPLOADTHING_TOKEN:z.string(),
      API_URL:z.string(),
      AUTH_SECRET:z.string()
  },
  client: {
  },

  runtimeEnv: {
    UPLOADTHING_TOKEN :process.env.UPLOADTHING_TOKEN,
    NODE_ENV: process.env.NODE_ENV,
    API_URL:process.env.API_URL,
    AUTH_SECRET:process.env.AUTH_SECRET
   
  },

  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
