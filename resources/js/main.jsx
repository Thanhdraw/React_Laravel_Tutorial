import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./components/Homepage";
import "../css/app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Login from "./components/Login";
import Details from "./components/detail";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/Login" element={<Login></Login>} />
                <Route path="/products/:id" element={<Details />} />
            </Routes>
        </BrowserRouter>
    );
}
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
