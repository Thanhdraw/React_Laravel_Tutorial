import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function detail() {
    const { id } = useParams(); // Lấy id từ URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch product detail
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

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="max-w-3xl p-6 mx-auto bg-white rounded-lg shadow-md">
            <h1 className="mb-4 text-3xl font-bold">{product.name}</h1>
            <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full rounded-lg h-60"
            />
            <p className="mt-2 text-lg text-gray-700">{product.description}</p>
            <p className="mt-2 text-xl font-semibold text-green-600">
                {product.price}$
            </p>

            <Link
                to="/products"
                className="inline-block px-4 py-2 mt-4 text-white bg-gray-600 rounded"
            >
                Quay về trang chủ
            </Link>
        </div>
    );
}
