import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyRouting from "./MyRouting";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <MyRouting />
    </StrictMode>
);
