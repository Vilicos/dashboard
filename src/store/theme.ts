import type { Theme, ThemeState } from "@custom-types/component";
import getBooleanFromLocalStorage  from "@helpers/boolean-from-storage";
import { create } from "zustand";

export const ThemeStore = create<ThemeState>((set,get) => ({
  theme: localStorage.getItem("theme") as Theme || "dark",
  useViewTransition: getBooleanFromLocalStorage('viewTransition',true),
  isAviableTransition:'startViewTransition' in document ? true : false,
  setTheme: (theme: Theme) => {
    const {useViewTransition,isAviableTransition} = get()
    if (localStorage.getItem("theme") === theme) return;
    localStorage.setItem("theme", theme);
    if (!isAviableTransition || !useViewTransition) return set({ theme });
    document.startViewTransition(() => set({ theme }));
  },
  setViewTransition:(value:boolean) => {
    localStorage.setItem('viewTransition',String(value))
    set({useViewTransition:value})
  }
}));
