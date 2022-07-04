import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
     host: true
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/index.js"),
      name: "nullResponsive",
      fileName: (format) => `null-responsive.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData: `
        @import "./src/style/_mixins.scss";
        @import "./src/style/_responsive.scss";

        `
      }
    }
  }
});
