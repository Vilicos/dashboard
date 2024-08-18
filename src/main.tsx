import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";
import Wrappers from "@/wrappers";
import "@styles/index.css";
import '@fontsource-variable/inter';

createRoot(document.querySelector("#root")!).render(
  <StrictMode>
    <Wrappers>
      <App />
    </Wrappers>
  </StrictMode>
);
