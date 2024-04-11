'use strict';

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', '@stylistic'],
  env: {
    node: true,
    browser: true,
    /** use "test or expect" without any lint err  */
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    '@stylistic/jsx-closing-bracket-location': 'warn',
    '@stylistic/jsx-closing-tag-location': 'warn',
    '@stylistic/jsx-curly-newline': ['warn', 'consistent'],
    '@stylistic/jsx-curly-spacing': 'warn',
    '@stylistic/jsx-equals-spacing': 'warn',
    '@stylistic/jsx-indent': ['warn', 2],
    '@stylistic/jsx-indent-props': ['warn', 2],
    '@stylistic/jsx-one-expression-per-line': ['warn', { allow: 'literal' }],
    '@stylistic/jsx-props-no-multi-spaces': 'warn',
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
        return: 'parens-new-line',
      },
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'jsx-a11y/anchor-ambiguous-text': 'error',
    'jsx-a11y/control-has-associated-label': 'error',
    'no-mixed-spaces-and-tabs': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-vars': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx', '.jsx'],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  /**
   * .eslintignore config, unlike .gitignore,
   *  "/" is used instead of "\"
   */
  ignorePatterns: [
    'node_modules',
    'dist',
    'build',
    'coverage',
    '.next',
    '.turbo',
    '.eslintrc.js',
    '.d.ts',
  ],
};
