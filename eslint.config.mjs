import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

// Root ESLint configuration for WW monorepo
const eslintConfig = [
  // Apply to TypeScript and JavaScript files in apps and packages
  {
    files: ["apps/**/*.{js,jsx,ts,tsx}", "packages/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true
      }
    },
    rules: {
      // WW React Guidelines - Basic rules
      "prefer-const": "error",
      "no-var": "error",
      "no-console": "warn",

      // Formatting rules (complement Prettier)
      semi: ["error", "always"],
      "comma-dangle": ["error", "never"]
    }
  }
];

export default eslintConfig;
