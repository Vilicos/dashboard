import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";
 
export const env = createEnv({
  clientPrefix: "VITE_",
 
  client: {
    VITE_Base_URL: z.string().min(1),
    VITE_Refresh_Expire: z.coerce.number().min(1),
    VITE_Access_Expire: z.coerce.number().min(1),
    VITE_Access_Expire_Instance: z.coerce.number().min(1),
    VITE_Google_Client_ID:z.string().min(1)
  },
  
  runtimeEnv: import.meta.env,

  emptyStringAsUndefined: true,
});