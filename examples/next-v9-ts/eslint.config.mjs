import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import jsConfig from "@nish1896/eslint-flat-config/js";
import tsConfig from "@nish1896/eslint-flat-config/ts";
import nextConfig from "@nish1896/eslint-flat-config/next";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...jsConfig,
  // ...tsConfig,
  ...nextConfig,
  {
    rules: {
      'jsx-a11y/anchor-ambiguous-text': 'error',
      'jsx-a11y/control-has-associated-label': 'error',
      '@next/next/no-duplicate-head': 'off' // Disable the problematic rule
    }
  }
];

export default eslintConfig;
