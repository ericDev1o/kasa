import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";
/*import Routing from "./Routing";
import IsHomeBannerProvider from "./config/context/BannerProvider";*/

hydrateRoot(
    document,
    <StrictMode>
        <HydratedRouter></HydratedRouter>
    </StrictMode>
);

//createRoot(document.getElementById("root")!).render(
