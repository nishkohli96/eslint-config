'use strict';

const ignorePatterns = require('../common/ignores');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    '@stylistic/jsx',
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'jsx-runtime': true
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
    ],
  },
  ignorePatterns,
};
