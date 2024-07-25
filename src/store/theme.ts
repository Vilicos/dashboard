import type { Theme, ThemeState } from "@custom-types/component";
import { create } from "zustand";

export const ThemeStore = create<ThemeState>((set,get) => ({
  theme: localStorage.getItem("theme") as Theme || "dark",
  useViewTransition:true,
  setTheme: (theme: Theme) => {
    const {useViewTransition} = get()
    if (localStorage.getItem("theme") === theme) return;
    localStorage.setItem("theme", theme);
    if (!document.startViewTransition || !useViewTransition) return set({ theme });
    document.startViewTransition(() => set({ theme }));
  },
  setViewTransition:(value:boolean) => set({useViewTransition:value})
}));
