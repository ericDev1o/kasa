import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import KasaRouter from "./components/KasaRouter";
import Layout from "./components/Layout";

function App() {
    createRoot(document.getElementById("root")!).render(
        <StrictMode>
            <KasaRouter />
            <Layout />
        </StrictMode>
    );
}

export default App;
