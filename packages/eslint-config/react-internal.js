import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginImport from "eslint-plugin-import";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";
import { config as baseConfig } from "./base.js";

/**
 * A custom ESLint configuration for libraries that use React.
 * Enforces WW React development guidelines.
 *
 * @type {import("eslint").Linter.Config[]} */
export const config = [
  ...baseConfig,
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser
      }
    }
  },
  {
    plugins: {
      "react-hooks": pluginReactHooks,
      import: pluginImport
    },
    settings: {
      react: { version: "detect" },
      "import/resolver": {
        typescript: {},
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"]
        }
      }
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      // React scope no longer necessary with new JSX transform.
      "react/react-in-jsx-scope": "off",

      // WW React Guidelines Enforcement

      // NO any - keep exceptions rare
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-return": "error",

      // Prefer type vs interface
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],

      // Prefer semicolons
      "@typescript-eslint/semi": ["error", "always"],

      // No trailing commas
      "@typescript-eslint/comma-dangle": ["error", "never"],
      "comma-dangle": ["error", "never"],

      // Import order enforcement
      "import/order": [
        "error",
        {
          groups: [
            "builtin", // Node.js built-in modules
            "external", // External packages
            "internal", // Internal modules (absolute imports)
            "parent", // Parent imports
            "sibling", // Sibling imports
            "index", // Index imports
            "object", // Object imports
            "type" // Type imports
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before"
            },
            {
              pattern: "@/**",
              group: "internal",
              position: "before"
            },
            {
              pattern: "./**/*.{css,scss,sass}",
              group: "sibling",
              position: "after"
            }
          ],
          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true
          }
        }
      ],

      // Enforce import/export syntax
      "import/no-default-export": "off", // Allow default exports for React components
      "import/prefer-default-export": "off",
      "import/no-unresolved": "error",
      "import/no-duplicates": "error",

      // Avoid unnecessary React import (already handled above)
      "react/jsx-uses-react": "off",

      // Prefer function declarations over const arrow functions for components
      "prefer-arrow-callback": "off",
      "func-style": ["error", "declaration", { allowArrowFunctions: true }],

      // Discourage useMemo and useCallback overuse
      "react-hooks/exhaustive-deps": "warn", // Downgrade from error to warn

      // Enforce camelCase for variables and functions
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "variableLike",
          format: ["camelCase"],
          leadingUnderscore: "allow"
        },
        {
          selector: "function",
          format: ["camelCase"]
        },
        {
          selector: "typeLike",
          format: ["PascalCase"]
        },
        {
          selector: "parameter",
          format: ["camelCase"],
          leadingUnderscore: "allow"
        }
      ],

      // Prefer const by default
      "prefer-const": "error",

      // Newline after variable declarations
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
        { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
        { blankLine: "always", prev: "import", next: "*" },
        { blankLine: "any", prev: "import", next: "import" }
      ],

      // React component specific rules
      "react/prop-types": "off", // We use TypeScript for prop validation
      "react/display-name": "error",

      // Prevent common React mistakes
      "react/jsx-key": "error",
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-no-undef": "error",
      "react/no-children-prop": "error",
      "react/no-deprecated": "error"
    }
  }
];

export default config;
