import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
    // State để lưu email & password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Xử lý submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email, "Password:", password);
        alert("gửi form thanh công");
    };

    return (
        <div>
            <h2 className="text-xl font-bold">Đăng nhập</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    className="w-full p-2 border"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border"
                    required
                />
                <button
                    type="submit"
                    className="px-4 py-2 text-white bg-blue-500"
                >
                    Đăng nhập
                </button>
            </form>
            <hr />
            <Link
                to="/"
                className="px-4 py-2 mt-4 text-white bg-gray-600 rounded"
            >
                Quay về Trang Chủ
            </Link>
        </div>
    );
};

export default Login;
