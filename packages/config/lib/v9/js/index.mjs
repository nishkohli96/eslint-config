import js from '@eslint/js';

export default {
  ...js.configs.recommended,
  rules: {
    'prefer-exponentiation-operator': 'warn',
    'prefer-promise-reject-errors': 'warn',
    'prefer-rest-params': 'error',
    semi: ['warn', 'always'],
    'require-await': 'warn',
    'use-isnan': 'warn',
  },
};
