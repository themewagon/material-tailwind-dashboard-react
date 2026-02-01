import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const BASE_URL = "/material-tailwind-dashboard-react/";

export default defineConfig({
  base: BASE_URL,
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
