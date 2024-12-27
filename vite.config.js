import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "./src/about.html"),
        contact: resolve(__dirname, "./src/contact.html"),
        products: resolve(__dirname, "./src/products.html"),
        addToCard: resolve(__dirname, "./src/addToCard.html"),
      },
    },
  },
});
