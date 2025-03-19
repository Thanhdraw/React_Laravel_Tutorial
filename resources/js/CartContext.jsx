import { createContext, useState, useContext } from "react";

// 1️⃣ Tạo Context
const CartContext = createContext();

// 2️⃣ Tạo Provider (chứa dữ liệu giỏ hàng)
export function CartProvider({ children }) {
    const [cart, setCart] = useState([]); // Giỏ hàng lưu dưới dạng array

    // Hàm thêm sản phẩm vào giỏ hàng
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]); // Thêm vào giỏ hàng
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

// 3️⃣ Hook giúp lấy dữ liệu giỏ hàng trong mọi component
export function useCart() {
    return useContext(CartContext);
}
