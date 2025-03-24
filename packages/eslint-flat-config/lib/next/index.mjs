/**
 * Adding stylistic jsx rules alongside the eslint rules from
 * "eslint-plugin-next" which includes recommended rule-sets
 * from the following ESLint plugins:
 * - eslint-plugin-react
 * - eslint-plugin-react-hooks
 * - eslint-plugin-next
 *
 * Reference -
 * https://nextjs.org/docs/app/api-reference/config/eslint
 */

import globals from 'globals';
import stylisticJsx from '@stylistic/eslint-plugin-jsx';
import { commonConfig } from '../common/index.mjs';

export default [
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
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: {
      '@stylistic/jsx': stylisticJsx,
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      '@stylistic/jsx/jsx-closing-bracket-location': 'warn',
      '@stylistic/jsx/jsx-closing-tag-location': 'warn',
      '@stylistic/jsx/jsx-curly-newline': ['warn', 'consistent'],
      '@stylistic/jsx/jsx-curly-spacing': 'warn',
      '@stylistic/jsx/jsx-equals-spacing': 'warn',
      '@stylistic/jsx/jsx-indent': ['warn', 2],
      '@stylistic/jsx/jsx-indent-props': ['warn', 2],
      '@stylistic/jsx/jsx-one-expression-per-line': [
        'warn',
        { allow: 'literal' }
      ],
      '@stylistic/jsx/jsx-pascal-case': 'warn',
      '@stylistic/jsx/jsx-props-no-multi-spaces': 'warn',
      '@stylistic/jsx/jsx-self-closing-comp': 'warn',
      '@stylistic/jsx/jsx-wrap-multilines': [
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
    ignores: commonConfig.ignoreDirsFiles,
  },
];
