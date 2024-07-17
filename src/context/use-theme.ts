import type { Theme, ThemeState } from "@custom-types/component";
import { create } from "zustand";

export const useThemeStore = create<ThemeState>((set) => ({
    theme: (localStorage.getItem('theme') as Theme) || 'system',
    setTheme: (theme: Theme) => {
      localStorage.setItem('theme', theme);
      set({ theme });
    },
  }));