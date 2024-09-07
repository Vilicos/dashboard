import { useEffect, useState, type ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@components/ui/toaster";
import NoSupport from "@components/errors/no-support";
import { useDebounce } from "@hooks/use-debounce";

const queryClient = new QueryClient();

function Wrappers({ children }: { children: ReactNode }) {
  const [width, setWidth] = useState<number>(window.innerWidth);
   const handleWindowSizeChange = useDebounce(()=>{setWidth(window.innerWidth);},50)

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
      handleWindowSizeChange.cancel(); 
    };
  }, [handleWindowSizeChange]);


  const isDesktop = width >= 1280;
  const content = isDesktop ? children : <NoSupport />;

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>{content}</HelmetProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster />
    </QueryClientProvider>
  );
}

export default Wrappers;
