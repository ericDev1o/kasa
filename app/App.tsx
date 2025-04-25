import { StrictMode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import About from "./pages/About";
import Housing from "./pages/Housing";
import Error from "./pages/Error";

//const App: React.FC = () => {
function App() {
    createRoot(document.getElementById("root")!).render(
        <StrictMode>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="/housing/:accomodation"
                        element={<Housing />}
                    />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
        </StrictMode>
    );
}

export default App;
