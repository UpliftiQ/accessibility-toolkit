import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? "/accessibility-toolkit/" : "/",
  resolve: {
    alias: {
      "@upliftiq/caption-player": fileURLToPath(new URL("../../packages/caption-player/src/index.ts", import.meta.url)),
      "@upliftiq/deaf-ui": fileURLToPath(new URL("../../packages/deaf-ui/src/index.ts", import.meta.url)),
      "@upliftiq/isl-tools": fileURLToPath(new URL("../../packages/isl-tools/src/index.ts", import.meta.url))
    }
  }
});
