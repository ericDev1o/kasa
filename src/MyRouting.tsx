import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Housing from './pages/Housing';
import Error404 from './pages/Error';

const MyRouting = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/housing/:housingId' element={<Housing />} />
            <Route path='*' element={<Error404 />} />
        </Routes>
    </BrowserRouter>
);

export default MyRouting;