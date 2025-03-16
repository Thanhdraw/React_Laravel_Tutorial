import React, { useState } from "react";

export default function ProductList() {
    const [products, setProducts] = useState([
        { id: 1, name: "iPhone 14", price: 999 },
        { id: 2, name: "MacBook Pro", price: 1999 },
        { id: 3, name: "AirPods Pro", price: 249 },
    ]);

    // State lưu số lượng từng sản phẩm
    return (
        <div>
            <h1>Danh sách sản phẩm</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - {product.price}$
                    </li>
                ))}
            </ul>
        </div>
    );
}
