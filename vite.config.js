import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import babel from "vite-plugin-babel";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  presets: ["babel-preset-vite"],
  base: "/",
  plugins: [react(), babel(), eslint()],
});
