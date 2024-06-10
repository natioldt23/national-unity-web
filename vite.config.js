import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      'usa-map-react': path.resolve(__dirname, 'node_modules/usa-map-react/dist/index.js')
    },
  },
});
