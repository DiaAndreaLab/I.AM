import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StealthVersion } from "./screens/StealthVersion";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <StealthVersion />
  </StrictMode>,
);
