import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";
 
export const env = createEnv({
  clientPrefix: "VITE_",
 
  client: {
    VITE_coingecko_url: z.string().min(1),
    VITE_coingecko_key: z.string().min(1),
  },
  
  runtimeEnv: import.meta.env,

  emptyStringAsUndefined: true,
});