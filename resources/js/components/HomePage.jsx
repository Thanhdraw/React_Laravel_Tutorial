import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
            <h1 className="text-3xl font-bold">Trang Chủ</h1>
            <Link
                to="/products"
                className="px-4 py-2 text-white bg-blue-500 rounded"
            >
                Xem Danh Sách Sản Phẩm
            </Link>
            <Link
                to="/Login"
                className="px-4 py-2 text-white bg-blue-500 rounded"
            >
                Đăng Nhập
            </Link>
        </div>
    );
}
