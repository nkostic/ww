import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

// Root ESLint configuration for WW monorepo
// Each app can extend this with their own specific rules
const eslintConfig = [
  // Ignore dist and build directories
  {
    ignores: ["**/dist/**", "**/build/**", "**/.next/**", "**/node_modules/**"]
  },

  // Let individual apps handle their own ESLint configuration
  // This root config should be minimal to avoid conflicts
  {
    files: ["*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },
    rules: {
      // Basic rules for root-level files only
      "prefer-const": "error",
      "no-var": "error"
    }
  }
];

export default eslintConfig;
