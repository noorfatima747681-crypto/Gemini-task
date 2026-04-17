// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        orders: resolve(__dirname, "orders.html"),
        profile: resolve(__dirname, "profile.html"),
      },
    },
  },
});
