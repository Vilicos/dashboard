import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";
 
export const env = createEnv({
  clientPrefix: "VITE_",
 
  client: {
    VITE_string: z.string().min(1),
    VITE_number: z.coerce.number()
  },
  
  runtimeEnv: import.meta.env,

  emptyStringAsUndefined: true,
});