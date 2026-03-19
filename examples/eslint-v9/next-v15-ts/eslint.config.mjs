import { FlatCompat } from '@eslint/eslintrc';
import jsConfig from '@nish1896/eslint-flat-config/js';
import nextConfig from '@nish1896/eslint-flat-config/next';
import nextTsConfig from '@nish1896/eslint-flat-config/next-ts';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...jsConfig,
  ...nextConfig,
  ...nextTsConfig,
  {
    rules: {
    }
  }
];

export default eslintConfig;
