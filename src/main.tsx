import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Routing from "./Routing";
import IsHomeBannerProvider from "./config/context/BannerProvider";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <IsHomeBannerProvider>
            <Routing />
        </IsHomeBannerProvider>
    </StrictMode>
);
