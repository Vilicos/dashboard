import type { loginFormSchema } from "@pages/auth-page/login";
import type { registerFormSchema } from "@pages/auth-page/register";
import type { ClassValue } from "clsx";
import type { ReactNode } from "react";
import type { z } from "zod";

export type INumberReducer = {
  value:number | null | undefined 
  style?:"decimal" | "percent" | "currency"
  min?:number 
  max?:number
  notation?:"compact" | "standard"
}

export enum UserRole {
    Admin = 'admin',
    Member = 'member',
}

export enum removeDialogContent {
  Team = "team",
  File = "file",
  Website = "website",
  Source = "source"
}
export type LoginFormValues = z.infer<typeof loginFormSchema>;
export type RegisterFormValues = z.infer<typeof registerFormSchema>;

export type ITooltip = {
  content:string;
  children:ReactNode;
  position?: "top" | "right" | "bottom" | "left"
  delay?: number;
  contentClass?:string;
  triggerClass?:string;
  sideOffSet?:number
}

export type PaginationProps = {
  pageRange:Array<string|number>;
  nextPage:()=>void;
  previousPage:()=>void;
  setPage:(arg0: number)=>void;
  currentPage:number;
  totalData:number;
  startItemIndex:number;
  endItemIndex:number;
  hasPreviousPage:boolean;
  hasNextPage:boolean;
  className?:ClassValue
}

export interface BaseResponse {
  status:string;
  message:string
}

export interface AuthResponse extends BaseResponse {
  result:{
    refresh:string;
    access:string;
    user_type: `${UserRole}`;
    user_id:number
  } | Record<string, never>
}

export interface FileAddResponse extends BaseResponse{
  result:{
    id:number;
    name:string;
    file:string;
  }
}

export interface FileRemoveResponse extends BaseResponse{
  result:string
}