import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";

const cart = () => {
    const { cart } = useCart();
    // Sample cart data
    const cartItems = [
        {
            id: 1,
            name: "Áo thun nam cổ tròn",
            price: 299000,
            quantity: 2,
            image: "/api/placeholder/80/80",
        },
        {
            id: 2,
            name: "Quần jeans slim fit",
            price: 599000,
            quantity: 1,
            image: "/api/placeholder/80/80",
        },
        {
            id: 3,
            name: "Giày sneaker trắng",
            price: 850000,
            quantity: 1,
            image: "/api/placeholder/80/80",
        },
    ];

    // Calculate totals
    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    const shipping = 30000;
    const total = subtotal + shipping;

    return (
        <div className="min-h-screen py-8 bg-gray-100">
            <div className="max-w-4xl px-4 mx-auto">
                <h1 className="mb-8 text-2xl font-bold text-gray-800">
                    Giỏ hàng của bạn
                </h1>
                {cart.length === 0 ? <p>Giỏ hàng trống</p> : null}
                {cart.map((item, index) => (
                    <p key={index}>
                        {item.name} - {item.price}$
                    </p>
                ))}
                <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
                    <div className="flex justify-between pb-6 mb-6 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-700">
                            Sản phẩm
                        </h2>
                        <div className="flex gap-8">
                            <h2 className="text-lg font-semibold text-gray-700">
                                Số lượng
                            </h2>
                            <h2 className="text-lg font-semibold text-gray-700">
                                Giá
                            </h2>
                        </div>
                    </div>

                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center pb-6 mb-6 border-b border-gray-200"
                        >
                            <div className="flex w-full">
                                <div className="w-20 h-20 mr-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="object-cover w-full h-full rounded"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-medium text-gray-800 text-md">
                                        {item.name}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Mã SP:{" "}
                                        {`SP${item.id}${item.id}${item.id}`}
                                    </p>
                                    <button className="mt-2 text-sm text-red-500 hover:text-red-700">
                                        Xóa
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center gap-8">
                                <div className="flex items-center border border-gray-200 rounded">
                                    <button className="px-3 py-1 text-gray-600 bg-gray-100 hover:bg-gray-200">
                                        -
                                    </button>
                                    <span className="px-4 py-1">
                                        {item.quantity}
                                    </span>
                                    <button className="px-3 py-1 text-gray-600 bg-gray-100 hover:bg-gray-200">
                                        +
                                    </button>
                                </div>
                                <span className="font-medium text-gray-800">
                                    {item.price.toLocaleString()}đ
                                </span>
                            </div>
                        </div>
                    ))}

                    <div className="flex justify-between mt-6">
                        <Link
                            to={"/products"}
                            className="text-sm text-blue-500 hover:text-blue-700"
                        >
                            ← Tiếp tục mua sắm
                        </Link>
                        <button className="text-sm text-red-500 hover:text-red-700">
                            Xóa tất cả
                        </button>
                    </div>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h2 className="mb-6 text-lg font-semibold text-gray-700">
                        Tổng giỏ hàng
                    </h2>

                    <div className="flex justify-between mb-4">
                        <span className="text-gray-600">Tạm tính</span>
                        <span className="font-medium text-gray-800">
                            {subtotal.toLocaleString()}đ
                        </span>
                    </div>

                    <div className="flex justify-between mb-4">
                        <span className="text-gray-600">Phí vận chuyển</span>
                        <span className="font-medium text-gray-800">
                            {shipping.toLocaleString()}đ
                        </span>
                    </div>

                    <div className="flex justify-between pt-4 mb-6 border-t border-gray-200">
                        <span className="text-lg font-semibold text-gray-700">
                            Tổng cộng
                        </span>
                        <span className="text-xl font-bold text-gray-800">
                            {total.toLocaleString()}đ
                        </span>
                    </div>

                    <button className="w-full py-3 font-medium text-white transition-colors bg-blue-600 rounded hover:bg-blue-700">
                        Tiến hành thanh toán
                    </button>

                    <div className="flex items-center justify-center gap-2 mt-6">
                        <span className="text-sm text-gray-500">
                            Chúng tôi chấp nhận
                        </span>
                        <div className="flex gap-2">
                            <div className="w-8 h-5 bg-blue-500 rounded"></div>
                            <div className="w-8 h-5 bg-red-500 rounded"></div>
                            <div className="w-8 h-5 bg-yellow-500 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default cart;
