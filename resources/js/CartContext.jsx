import { createContext, useState, useContext } from "react";

// 1️⃣ Tạo Context
const CartContext = createContext();

// 2️⃣ Tạo Provider (chứa dữ liệu giỏ hàng)
export function CartProvider({ children }) {
    const [cart, setCart] = useState([]); // Giỏ hàng lưu dưới dạng array

    // Hàm thêm sản phẩm vào giỏ hàng
    const addToCart = (product, quantity) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(
                (item) => item.id === product.id
            );
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: quantity } // Cập nhật lại số lượng chính xác
                        : item
                );
            }
            return [
                ...prevCart,
                { ...product, quantity: Math.max(1, quantity) },
            ];
        });
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
