import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Puerto 3000
    host: "0.0.0.0", // Permitir acceso desde cualquier dirección IP
    open: true, // Abrir automáticamente en el navegador
  },
});
