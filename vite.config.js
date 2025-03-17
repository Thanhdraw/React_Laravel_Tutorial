import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react"; // Dùng đúng plugin React

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/js/main.jsx", "resources/css/app.css"],
            refresh: true,
        }),
        react(), // Dùng đúng plugin React
    ],
    server: {
        historyApiFallback: true, // Giúp React Router xử lý reload
    },
});
