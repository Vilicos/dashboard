import type { Theme, ThemeState } from "@custom-types/component";
import { create } from "zustand";

export const useThemeStore = create<ThemeState>((set) => ({
  theme: localStorage.getItem("theme") as Theme,
  setTheme: (theme: Theme) => {
    if (localStorage.getItem("theme") === theme) return;
    localStorage.setItem("theme", theme);
    if (!document.startViewTransition) return set({ theme });
    document.startViewTransition(() => set({ theme }));
  },
}));
