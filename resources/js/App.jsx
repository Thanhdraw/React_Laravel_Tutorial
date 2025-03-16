import React from "react";
import ProductList from "./components/ProductList";
import Login from "./components/Login";
import Click from "./components/click";
export default function App() {
    return (
        <div className="container mx-auto mt-5">
            <Login />
            <ProductList />
            <Click></Click>
            <h1>React from Laravel</h1>
        </div>
    );
}
