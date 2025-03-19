import React from "react";
import ProductList from "./components/ProductList";
import Login from "./components/Login";

import { CartProvider } from "./CartContext"; // Đảm bảo import đúng

export default function App() {
    return (
        <div>
            <HomePage></HomePage>
            <Login></Login>
        </div>
    );
}
