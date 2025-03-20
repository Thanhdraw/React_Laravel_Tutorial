import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
export default function ProductList() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const { addToCart } = useCart();
    // Fetch API bằng Axios
    const fetchProducts = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8000/api/products"
            );
            setProducts(response.data?.data || []);
        } catch (error) {
            setError(error.response?.data?.message || error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading)
        return <p className="text-center text-gray-500">Loading Products...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    const handleQuantityChange = (id, value) => {
        const quantity = parseInt(value, 10);

        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id
                    ? {
                          ...product,
                          quantity:
                              isNaN(quantity) || quantity < 1 ? 1 : quantity, // Đảm bảo số lượng hợp lệ
                      }
                    : product
            )
        );
    };

    return (
        <div className="max-w-6xl p-6 mx-auto">
            {/* Link giỏ hàng */}
            <div className="flex justify-between mb-6">
                <h1 className="text-3xl font-bold text-gray-800">
                    Danh sách sản phẩm
                </h1>
                <Link
                    to={"/cart"}
                    className="text-lg font-semibold text-blue-500 hover:text-blue-700"
                >
                    🛒 Giỏ hàng
                </Link>
            </div>

            {/* Grid hiển thị sản phẩm */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="p-5 transition-all bg-white shadow-lg rounded-xl hover:shadow-xl"
                    >
                        {/* Ảnh sản phẩm */}
                        <div className="overflow-hidden rounded-xl">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="object-cover w-full h-48 transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        {/* Thông tin sản phẩm */}
                        <h2 className="mt-4 text-xl font-bold text-gray-800">
                            {product.name}
                        </h2>
                        <p className="text-lg font-bold text-green-600">
                            ${product.price}
                        </p>

                        {/* Input số lượng */}
                        <div className="flex items-center mt-4 space-x-3">
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
                                className="w-16 p-2 text-center border rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Nút điều hướng */}
                        <div className="flex flex-col mt-5 space-y-3">
                            <Link
                                to={`/products/${product.id}`}
                                className="w-full px-4 py-2 text-center text-blue-500 transition duration-300 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white"
                            >
                                Xem chi tiết
                            </Link>
                            <button
                                onClick={() =>
                                    addToCart(product, product.quantity || 1)
                                }
                                className="w-full px-4 py-2 text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
                            >
                                Thêm vào giỏ hàng
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Nút quay về trang chủ */}
            <div className="mt-6 text-center">
                <Link
                    to="/"
                    className="px-6 py-3 text-white transition duration-300 bg-gray-600 rounded-lg hover:bg-gray-700"
                >
                    Quay về Trang Chủ
                </Link>
            </div>
        </div>
    );
}
