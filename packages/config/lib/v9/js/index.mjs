import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default {
  ...js.configs.recommended,
  ...tseslint.configs.recommended,
  rules: {
    'prefer-exponentiation-operator': 'warn',
    'prefer-promise-reject-errors': 'warn',
    'prefer-rest-params': 'error',
    semi: ['warn', 'always'],
    'require-await': 'warn',
    'use-isnan': 'warn',
  },
};
