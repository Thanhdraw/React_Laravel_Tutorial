import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./components/Homepage";
import "../css/app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Login from "./components/Login";
import Details from "./components/detail";
import Cart from "./components/cart";
import { CartProvider } from "./CartContext"; // Đảm bảo import đúng

import Register from "./components/Register";
import cart from "./components/cart";

function App() {
    return (
        <BrowserRouter>
            <CartProvider>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/Login" element={<Login></Login>} />
                    <Route path="/products/:id" element={<Details />} />
                    <Route
                        path="/register"
                        element={<Register></Register>}
                    ></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                </Routes>
            </CartProvider>
        </BrowserRouter>
    );
}
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
