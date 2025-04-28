import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Housing from "./pages/Housing";
import Error from "./pages/Error";

//const App: React.FC = () => {
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/housing/:accomodation" element={<Housing />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}

export default App;
