import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductList() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/products")
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched Data:", data); // Debug dữ liệu
                setProducts(data.data);
                setLoading(false);
            })
            .catch((error) => console.log("Error fetching data", error));
    }, []);

    if (loading) {
        return <p>Loading Products...</p>;
    }

    const handleQuantityChange = (id, value) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id
                    ? {
                          ...product,
                          quantity: Math.max(1, parseInt(value, 10) || 1),
                      }
                    : product
            )
        );
    };

    return (
        <div className="max-w-5xl p-6 mx-auto">
            <h1 className="mb-6 text-3xl font-bold text-center text-gray-800">
                Danh sách sản phẩm
            </h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="p-4 bg-white rounded-lg shadow-md"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="object-cover w-full h-40 rounded-lg"
                        />
                        <h2 className="mt-4 text-xl font-semibold text-gray-800">
                            {product.name}
                        </h2>
                        <p className="text-lg font-bold text-green-600">
                            {product.price}$
                        </p>
                        <div className="flex items-center mt-4 space-x-2">
                            <label className="text-gray-600">Số lượng:</label>
                            <input
                                type="number"
                                min="1"
                                value={product.quantity || 1}
                                onChange={(e) =>
                                    handleQuantityChange(
                                        product.id,
                                        e.target.value
                                    )
                                }
                                className="w-16 p-1 text-black border border-gray-300 rounded"
                            />
                        </div>
                        <button className="w-full py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                            Thêm vào giỏ hàng
                        </button>
                    </div>
                ))}
            </div>
            <Link
                to="/"
                className="px-4 py-2 mt-4 text-white bg-gray-600 rounded"
            >
                Quay về Trang Chủ
            </Link>
        </div>
    );
}
