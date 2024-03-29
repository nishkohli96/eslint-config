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
    '@stylistic/array-bracket-newline': [
      'warn',
      { multiline: true, minItems: 4 },
    ],
    '@stylistic/array-bracket-spacing': 'warn',
    '@stylistic/arrow-parens': ['warn', 'as-needed'],
    '@stylistic/arrow-spacing': 'warn',
    '@stylistic/block-spacing': 'warn',
    '@stylistic/brace-style': 'warn',
    '@stylistic/comma-dangle': ['warn', 'always-multiline'],
    '@stylistic/comma-spacing': 'warn',
    '@stylistic/eol-last': 'warn',
    '@stylistic/function-call-argument-newline': ['warn', 'consistent'],
    '@stylistic/function-paren-newline': ['warn', 'consistent'],
    '@stylistic/indent': ['warn', 2],
    '@stylistic/indent-binary-ops': ['warn', 2],
    '@stylistic/jsx-closing-bracket-location': 'warn',
    '@stylistic/jsx-closing-tag-location': 'warn',
    '@stylistic/jsx-curly-newline': ['warn', 'consistent'],
    '@stylistic/jsx-curly-spacing': 'warn',
    '@stylistic/jsx-equals-spacing': 'warn',
    '@stylistic/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
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
    '@stylistic/key-spacing': 'warn',
    '@stylistic/linebreak-style': 'warn',
    '@stylistic/no-extra-semi': 'warn',
    '@stylistic/no-floating-decimal': 'warn',
    '@stylistic/no-mixed-operators': 'error',
    '@stylistic/no-mixed-spaces-and-tabs': 'warn',
    '@stylistic/no-multi-spaces': 'warn',
    '@stylistic/no-multiple-empty-lines': 'warn',
    '@stylistic/no-trailing-spaces': 'warn',
    '@stylistic/object-curly-newline': ['warn', { multiline: true }],
    '@stylistic/object-curly-spacing': ['warn', 'always'],
    '@stylistic/object-property-newline': 'warn',
    '@stylistic/operator-linebreak': ['warn', 'before'],
    '@stylistic/quotes': ['warn', 'single'],
    '@stylistic/rest-spread-spacing': 'warn',
    '@stylistic/semi-spacing': 'warn',
    '@stylistic/spaced-comment': 'warn',
    '@stylistic/space-unary-ops': [
      'warn',
      {
        words: true,
        nonwords: false,
      },
    ],
    '@stylistic/switch-colon-spacing': 'warn',
    '@stylistic/template-curly-spacing': 'warn',
    '@stylistic/type-annotation-spacing': 'warn',
    '@stylistic/type-generic-spacing': 'warn',
    '@stylistic/type-named-tuple-spacing': 'warn',
    '@stylistic/wrap-regex': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'array-callback-return': 'warn',
    'arrow-body-style': ['warn', 'as-needed'],
    curly: 'warn',
    'default-case': 'warn',
    'dot-notation': 'warn',
    eqeqeq: 'error',
    'func-names': ['warn', 'as-needed'],
    'jsx-a11y/anchor-ambiguous-text': 'error',
    'jsx-a11y/control-has-associated-label': 'error',
    'no-await-in-loop': 'warn',
    'no-debugger': 'warn',
    'no-eq-null': 'error',
    'no-inline-comments': 'warn',
    'no-mixed-spaces-and-tabs': 'off',
    'no-plusplus': 'warn',
    'no-unreachable': 'warn',
    'no-use-before-define': 'error',
    'no-var': 'warn',
    'object-shorthand': 'warn',
    'prefer-const': 'warn',
    'prefer-exponentiation-operator': 'warn',
    'prefer-promise-reject-errors': 'warn',
    'prefer-rest-params': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-vars': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx', '.jsx'],
      },
    ],
    semi: ['warn', 'always'],
    'require-await': 'error',
    'use-isnan': 'warn',
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
