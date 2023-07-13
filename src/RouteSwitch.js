import React, { useEffect, useState } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Contacts from "./pages/Contacts";
import Cart from "./pages/Cart";
import Layout from "./pages/Layout";
import './App.css';

const RouteSwitch = () => {
    const [counter, setCounter] = useState(0);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCounter(cart.length);
    }, [cart])

    const addToCart = (item) => {
        
        if (cart.every(prevItem => prevItem.id !== item.id)) {
            setCart((prev) => [
                ...prev,
                {
                    amount: 1,
                    id: item.id,
                    item: item
                }
            ])
        } else {
            setCart((prev) => [
                ...prev.map(prevItem => {
                    if (prevItem.id === item.id) {
                        return {
                            ...prevItem,
                            amount: prevItem.amount+1
                                                    
                        }
                    } else {
                        return prevItem;
                    }
                })
            ])
        }
    }

    const addAmount = (id) => {
        setCart((prev) => [
            ...prev.map(prevItem =>{
                if (prevItem.id === id) {
                    return {
                        ...prevItem,
                        amount: prevItem.amount + 1
                    }
                } else {
                    return prevItem;
                }
            })
        ])
    }
    const reduceAmount = (id) => {
        setCart((prev) => [
            ...prev.map(prevItem => {
                if (prevItem.id === id) {
                    return {
                        ...prevItem,
                        amount: prevItem.amount - 1
                    }
                } else {
                    return prevItem;
                }
            }).filter(item => item.amount >= 1)
        ])
    }

    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Layout counter={counter}/>}>
                    <Route path='/' element={<Main />} />
                    <Route path='/products' element={<Products click={addToCart} cart={cart}/>} />
                    <Route path='/contacts' element={<Contacts />} />
                    <Route path='/cart' element={<Cart cart={cart} addAmount={addAmount} reduceAmount={reduceAmount}/>} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default RouteSwitch;