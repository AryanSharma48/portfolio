import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  // Configure standard global ignores for Astro builds
  globalIgnores([
    ".astro/**",
    "dist/**",
    "node_modules/**",
    "out/**",
  ]),
]);

export default eslintConfig;

