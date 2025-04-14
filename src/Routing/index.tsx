import { BrowserRouter as Router, Routes, Route } from "react-router";
import "../style/css/index.css";
import Home from "../pages/Home";
import About from "../pages/About";
import Flat from "../pages/Flat";
import Error from "../pages/Error";

function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/flat/:flatNumber" element={<Flat />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}

export default Routing;
