import type { ThemeProviderState } from "@custom-types/component";
import type { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


const queryClient = new QueryClient();

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

function Wrappers({children}:{children:ReactNode}) {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  )
}

export default Wrappers