import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin'
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import ignoreDirsFiles from '../common/ignores.mjs';

const jsxConfig = [
  /* Global Language Options */
  {
    name: '@nish1896/eslint-flat-config/jsx',
    files: ['**/*.{jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      ...reactPlugin.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.browser,
        ...globals.serviceworker,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
    },
  },

  /* Recommended Configs */
  {
    ...jsxA11y.flatConfigs.recommended,
    files: ['**/*.{jsx,tsx}']
  },
  {
    ...reactPlugin.configs.flat.recommended,
    files: ['**/*.{jsx,tsx}']
  },
  {
    ...reactHooks.configs.flat.recommended,
    files: ['**/*.{jsx,tsx}']
  },

  /* Rules for JavaScript and JSX Files */
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      '@stylistic': stylistic,
    },
    settings: {
      react: {
        version: 'detect',
        'jsx-runtime': true
      }
    },
    rules: {
      '@stylistic/jsx-closing-bracket-location': 'warn',
      '@stylistic/jsx-curly-newline': ['warn', 'consistent'],
      '@stylistic/jsx-curly-spacing': 'warn',
      '@stylistic/jsx-equals-spacing': 'warn',
      '@stylistic/jsx-indent-props': ['warn', 2],
      '@stylistic/jsx-one-expression-per-line': [
        'warn',
        { allow: 'literal' }
      ],
      '@stylistic/jsx-pascal-case': 'warn',
      '@stylistic/jsx-quotes': ['warn', 'prefer-double'],
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
    ignores: ignoreDirsFiles
  }
];

export default jsxConfig;
