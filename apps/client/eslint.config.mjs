import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

// Use Next.js config with our custom React rules
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // WW React Guidelines - Custom rules for this project
    rules: {
      // NO any - keep exceptions rare
      "@typescript-eslint/no-explicit-any": "error",

      // Prefer semicolons (use standard semi rule)
      semi: ["error", "always"],

      // No trailing commas
      "comma-dangle": ["error", "never"],

      // Prefer const by default
      "prefer-const": "error",

      // React component specific rules
      "react/prop-types": "off", // We use TypeScript for prop validation
      "react/display-name": "error",

      // Prevent common React mistakes
      "react/jsx-key": "error",
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-no-undef": "error",
      "react/no-children-prop": "error",

      // Next.js specific overrides
      "@next/next/no-html-link-for-pages": "off",

      // Enforce camelCase naming with exceptions for Storyblok fields
      camelcase: [
        "error",
        {
          properties: "always",
          allow: [
            // Common Storyblok field patterns
            "background_image",
            "cta_text",
            "cta_link",
            "text_align",
            "max_width",
            "rich_text",
            "cta_banner",
            // Font names
            "Geist_Mono"
          ]
        }
      ]
    }
  }
];

export default eslintConfig;
