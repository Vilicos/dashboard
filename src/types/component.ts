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

export type ISeo = {
  title:string
}

export enum WidgetDateOption {
  '24h' = '24h',
  '7d' = '7d',
  '1m' = '1m',
  '3m' = '3m',
  'All' = 'All'
}
