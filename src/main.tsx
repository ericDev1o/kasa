import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import KasaRouter from "./Routing";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <KasaRouter />
    </StrictMode>
);
