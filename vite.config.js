import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import sitemap from 'vite-plugin-sitemap'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile(),sitemap({ hostname: 'https://ravindrayadav.online' })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
