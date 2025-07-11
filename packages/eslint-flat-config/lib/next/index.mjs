/**
 * Adding stylistic jsx rules alongside the eslint rules from
 * "eslint-plugin-next" which includes recommended rule-sets
 * from the following ESLint plugins:
 * - eslint-plugin-react
 * - eslint-plugin-react-hooks
 * - eslint-plugin-jsx-a11y
 *
 * Reference -
 * https://nextjs.org/docs/app/api-reference/config/eslint
 */

import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
import ignoreDirsFiles from '../common/ignores.mjs';

const nextConfig = [
  {
    name: '@nish1896/eslint-flat-config/next',
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        ...globals.serviceworker,
        ...globals.browser
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
        'jsx-runtime': true
      }
    },
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/jsx-closing-bracket-location': 'warn',
      '@stylistic/jsx-closing-tag-location': 'warn',
      '@stylistic/jsx-curly-newline': ['warn', 'consistent'],
      '@stylistic/jsx-curly-spacing': 'warn',
      '@stylistic/jsx-equals-spacing': 'warn',
      '@stylistic/jsx-indent': ['warn', 2],
      '@stylistic/jsx-indent-props': ['warn', 2],
      '@stylistic/jsx-one-expression-per-line': [
        'warn',
        { allow: 'literal' }
      ],
      '@stylistic/jsx-pascal-case': 'warn',
      '@stylistic/jsx-props-no-multi-spaces': 'warn',
      '@stylistic/jsx-self-closing-comp': 'warn',
      '@stylistic/jsx-wrap-multilines': [
        'warn',
        {
          arrow: 'parens-new-line',
          assignment: 'parens-new-line',
          condition: 'parens-new-line',
          declaration: 'parens-new-line',
          logical: 'parens-new-line',
          return: 'parens-new-line'
        }
      ],
      'jsx-a11y/anchor-ambiguous-text': 'error',
      'jsx-a11y/control-has-associated-label': 'error',
      'no-alert': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': [
        'warn',
        {
          extensions: ['.tsx', '.jsx']
        }
      ]
    },
    ignores: ignoreDirsFiles,
  },
];

export default nextConfig;
