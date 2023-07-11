import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Contacts from "./pages/Contacts";
import Cart from "./pages/Cart";
import './App.css';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/products' element={<Products />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;