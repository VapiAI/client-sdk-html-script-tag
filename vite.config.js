import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.js",
      name: "index",
      fileName: (format) =>
        format === "umd" ? `index.js` : `index.${format}.js`,
    },
  },
});
