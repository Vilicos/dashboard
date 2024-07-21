import type { ReactNode } from "react";

export type Theme = 'dark' | 'light';

export type ThemeState = {
  theme: Theme;
  useViewTransition:boolean;
  setTheme: (theme: Theme) => void;
  setViewTransition:(value:boolean)=> void
}

export type ITooltip = {
  content:string;
  children:ReactNode;
  position?: "top" | "right" | "bottom" | "left"
  delay?: number
}