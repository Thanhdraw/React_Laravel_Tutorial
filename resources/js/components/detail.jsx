import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function Detail() {
    const { id } = useParams(); // Lấy id từ URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8000/api/products/${id}`
                );
                setProduct(response.data.data);
            } catch (error) {
                setError(
                    error.response?.data?.message || "Error fetching product"
                );
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetail();
    }, [id]);

    if (loading) return <p className="text-center text-gray-500">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="max-w-4xl p-6 mx-auto bg-white shadow-lg rounded-xl">
            <h1 className="mb-4 text-3xl font-bold text-gray-800">
                {product.name}
            </h1>
            <div className="overflow-hidden rounded-xl">
                <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-72"
                />
            </div>
            <p className="mt-4 text-lg text-gray-600">{product.description}</p>
            <p className="mt-3 text-2xl font-semibold text-green-600">
                ${product.price}
            </p>

            <div className="flex items-center gap-4 mt-6">
                <button className="px-6 py-3 text-white transition duration-300 bg-blue-500 rounded-lg shadow-md hover:bg-blue-600">
                    Thêm vào giỏ hàng
                </button>
                <Link
                    to="/products"
                    className="px-5 py-3 text-gray-800 transition duration-300 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                    Quay về trang chủ
                </Link>
            </div>
        </div>
    );
}
