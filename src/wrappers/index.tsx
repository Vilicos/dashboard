import { useEffect, type ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useThemeStore } from "@context/use-theme";

const queryClient = new QueryClient();

function Wrappers({ children }: { children: ReactNode }) {
  const { theme } = useThemeStore();
  
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");
    localStorage.setItem('theme',theme)
    root.classList.add(theme)
    
  }, [theme]);
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default Wrappers;
