import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import babel from "vite-plugin-babel";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vite-gh-pages",
  presets: ["babel-preset-vite"],
  plugins: [react(), babel(), eslint()],
});
