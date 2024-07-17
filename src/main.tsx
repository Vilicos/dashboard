import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";
import "@styles/index.css";
import "@fontsource/geist-sans/400.css";
import "@fontsource/geist-sans/500.css";
import "@fontsource/geist-sans/600.css";
import Wrappers from "@/wrappers";

createRoot(document.querySelector("#root")!).render(
  <StrictMode>
    <Wrappers>
      <App />
    </Wrappers>
  </StrictMode>
);
