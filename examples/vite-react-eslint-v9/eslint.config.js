/**
 * Duplicate import of tseslint in this file and from jsxConfig of
 * @nish1896/eslint-flat-config/jsx gives error. Hence done this way,
 * instead of just extending "jsConfig" and "jsxConfig" from the package.
 */

import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import jsConfig from '@nish1896/eslint-flat-config/js';

export default tseslint.config(
  { ignores: ['build', 'dist'] },
  {
    extends: [
      ...tseslint.configs.recommended,
      jsxA11y.flatConfigs.recommended,
      ...jsConfig
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'jsx-a11y/anchor-ambiguous-text': 'error',
      'jsx-a11y/control-has-associated-label': 'error',
    },
  },
)
