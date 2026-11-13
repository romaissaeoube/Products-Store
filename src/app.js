import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Products from './pages/products';
import Contact from './pages/contact';
import Product from './pages/product';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/product/:id' element={<Product />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}