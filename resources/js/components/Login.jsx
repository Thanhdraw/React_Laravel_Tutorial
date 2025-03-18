import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
    // State để lưu email & password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userInfo, setUserInfo] = useState("");
    const [loading, setLoading] = useState(false);

    // Xử lý submit form
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { email, password };
        alert("gửi form thanh công", data);
        // console.log("Email:", email, "Password:", password);
        console.log(`Data: ${data}`);

        try {
            const response = await axios.post(
                `http://localhost:8000/api/login`,
                data,
                { headers: { "Content-Type": "application/json" } }
            );
            if (response.data) {
                setUserInfo(response.data.user);
                console.log("User Info:", response.data.user);
            }
        } catch (Erorr) {
            console.log(`Your Error: ${Erorr.message}`);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <p>Loading Products...</p>;
    }
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
            {userInfo && (
                <div className="p-4 mt-4 border">
                    <h3>Thông tin đăng nhập:</h3>
                    <p>
                        <strong>Tên:</strong> {userInfo.name}
                    </p>
                    <p>
                        <strong>Email:</strong> {userInfo.email}
                    </p>
                    <p>
                        <strong>Vai trò:</strong> {userInfo.role}
                    </p>
                </div>
            )}

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
