import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: "https://zesty-backend-sd0l.onrender.com", // your backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
