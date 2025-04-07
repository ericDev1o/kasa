import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Flat from "./pages/Flat";
import Error from "./pages/Error";

const App: React.FC = () => {

    return (
        <React.StrictMode>
            <Router>
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/about" element={ <About /> } />
                    <Route path="/flat/:flatNumber" element={ <Flat /> } />
                    <Route path="*" element={ <Error /> } />
                </Routes>
            </Router>
        </React.StrictMode>
    )
}

export default App;