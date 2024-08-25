import type { loginFormSchema, registerFormSchema } from "@constants/static-data";
import type { ReactNode } from "react";
import type { z } from "zod";

export enum UserRole {
    Admin = 'admin',
    Member = 'member',
}

export enum removeDialogContent {
  Member = "member",
  File = "file",
  Website = "website"
}
export type LoginFormValues = z.infer<typeof loginFormSchema>;
export type RegisterFormValues = z.infer<typeof registerFormSchema>;

export interface AuthRouteConfig {
  title: string;
  description: string;
  urlTitle: string;
  urlPath: string;
  submitName: string;
  googleName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formSchema: z.ZodSchema<any>;
  defaultValues:{
    email:string;
    password:string;
    fullName?:string
  }
}
export type AuthData = {
  "/login": AuthRouteConfig;
  "/register": AuthRouteConfig;
};

export type ITooltip = {
  content:string;
  children:ReactNode;
  position?: "top" | "right" | "bottom" | "left"
  delay?: number;
  contentClass?:string;
  triggerClass?:string;
  sideOffSet?:number
}