import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.js",
      name: "index",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // If there are no external dependencies, you can remove this section
    },
  },
});
