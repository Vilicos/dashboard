import type { ColumnDef } from "@tanstack/react-table";
import type { ReactNode } from "react";

export type Theme = 'dark' | 'light';

export type ThemeState = {
  theme: Theme;
  useViewTransition:boolean;
  setTheme: (theme: Theme) => void;
  setViewTransition:(value:boolean)=> void;
  isAviableTransition:boolean
}

export type ITooltip = {
  content:string;
  children:ReactNode;
  position?: "top" | "right" | "bottom" | "left"
  delay?: number
}

export type ITitle = {
  title:string
}

export enum WidgetDateOption {
  '24h' = '24h',
  '7d' = '7d',
  '1m' = '1m',
  '3m' = '3m',
  'All' = 'All'
}

export type INumberReducer = {
  value:number | null | undefined 
  style?:"decimal" | "percent" | "currency"
  min?:number 
  max?:number
  notation?:"compact" | "standard"
}

export type DataTableProps<T> = {
  data: Array<T>;
  columns: Array<ColumnDef<T>>;
  searchProperty:string;
};