import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    name: "accessibility",
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    include: ["packages/*/test/**/*.test.{ts,tsx}"],
    coverage: {
      reporter: ["text", "html"],
      include: ["packages/*/src/**/*.{ts,tsx}"],
      exclude: ["**/*.d.ts"]
    }
  }
});
