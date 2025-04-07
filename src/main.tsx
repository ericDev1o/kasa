import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import KasaRouter from "./components/KasaRouter";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <KasaRouter />
    </StrictMode>
);
