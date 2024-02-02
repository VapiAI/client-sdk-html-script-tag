import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.js",
      name: "index",
      fileName: (format) =>
        format === "umd" ? `assets/index.js` : `assets/index.${format}.js`,
    },
  },
});
