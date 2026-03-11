import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CRMAnleitung from "./CRM_Bedienungsanleitung";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CRMAnleitung />
  </StrictMode>
);
