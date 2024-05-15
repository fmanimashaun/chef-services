import { resolve } from "path";
import htmlPurge from "vite-plugin-html-purgecss";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [htmlPurge()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, "src/index.html"),
    },
  },
});
