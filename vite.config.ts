import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filePath = fileURLToPath(import.meta.url); 
const __dirname = dirname(__filePath); 

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@context": path.resolve(__dirname, "./src/context"), // /Users/user/path-aliases/src/components/UI
      "@locales": path.resolve(__dirname, "./src/locales"),
      "@": path.resolve(__dirname, "."),
      "@components": path.resolve(__dirname, "./src/components")
    }
  }
})
