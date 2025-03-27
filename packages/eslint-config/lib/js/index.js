'use strict';

module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  plugins: [
    '@stylistic/js',
    '@stylistic/plus',
  ],
  env: {
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    '@stylistic/js/array-bracket-spacing': 'warn',
    '@stylistic/js/arrow-parens': ['warn', 'as-needed'],
    '@stylistic/js/arrow-spacing': 'warn',
    '@stylistic/js/block-spacing': 'warn',
    '@stylistic/js/brace-style': 'warn',
    '@stylistic/js/comma-spacing': 'warn',
    '@stylistic/js/dot-location': ['warn', 'property'],
    '@stylistic/js/eol-last': 'warn',
    '@stylistic/js/function-call-argument-newline': ['warn', 'consistent'],
    '@stylistic/js/function-paren-newline': ['warn', 'consistent'],
    '@stylistic/js/indent': [
      'warn',
      2,
      {
        ignoredNodes: [
          'PropertyDefinition[decorators]',
          'MethodDefinition[decorators]',
          'ClassBody.body > Decorator'
        ],
        SwitchCase: 1
      }
    ],
    '@stylistic/js/jsx-quotes': ['warn', 'prefer-double'],
    '@stylistic/js/key-spacing': 'warn',
    '@stylistic/js/linebreak-style': 'warn',
    '@stylistic/js/no-extra-semi': 'warn',
    '@stylistic/js/no-floating-decimal': 'warn',
    '@stylistic/js/no-mixed-spaces-and-tabs': 'warn',
    '@stylistic/js/no-multi-spaces': 'warn',
    '@stylistic/js/no-multiple-empty-lines': 'warn',
    '@stylistic/js/no-trailing-spaces': 'warn',
    '@stylistic/js/nonblock-statement-body-position': 'warn',
    '@stylistic/js/object-curly-newline': ['warn', { consistent: true }],
    '@stylistic/js/object-curly-spacing': ['warn', 'always'],
    '@stylistic/js/operator-linebreak': ['warn', 'before'],
    '@stylistic/js/quotes': ['warn', 'single'],
    '@stylistic/js/rest-spread-spacing': 'warn',
    '@stylistic/js/semi': 'warn',
    '@stylistic/js/semi-spacing': 'warn',
    '@stylistic/js/space-before-blocks': [
      'warn',
      {
        functions: 'always',
        classes: 'always',
        keywords: 'always'
      }
    ],
    '@stylistic/js/space-infix-ops': 'warn',
    '@stylistic/js/space-unary-ops': [
      'warn',
      {
        words: true,
        nonwords: false
      }
    ],
    '@stylistic/js/spaced-comment': 'warn',
    '@stylistic/js/switch-colon-spacing': 'warn',
    '@stylistic/js/template-curly-spacing': 'warn',
    '@stylistic/js/wrap-regex': 'warn',
    '@stylistic/plus/indent-binary-ops': ['warn', 2],
    '@stylistic/plus/curly-newline': ['warn', 'always'],
    'array-callback-return': 'warn',
    'block-scoped-var': 'warn',
    curly: 'warn',
    'default-case': 'warn',
    'default-case-last': 'warn',
    eqeqeq: 'error',
    'func-names': ['warn', 'as-needed'],
    'logical-assignment-operators': ['warn', 'always'],
    'max-params': ['warn', 5],
    'no-await-in-loop': 'warn',
    'no-continue': 'warn',
    'no-debugger': 'warn',
    'no-duplicate-imports': 'warn',
    'no-empty-function': 'warn',
    'no-empty-static-block': 'warn',
    'no-eq-null': 'error',
    'no-implicit-coercion': 'warn',
    'no-inline-comments': 'warn',
    'no-lonely-if': 'warn',
    'no-nested-ternary': 'warn',
    'no-plusplus': 'warn',
    'no-throw-literal': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-unreachable': 'warn',
    'no-unused-vars': 'warn',
    'no-unused-expressions': 'warn',
    'no-useless-concat': 'warn',
    'no-use-before-define': 'error',
    'no-var': 'warn',
    'object-shorthand': 'warn',
    'operator-assignment': 'warn',
    'prefer-const': 'warn',
    'prefer-exponentiation-operator': 'warn',
    'prefer-promise-reject-errors': 'warn',
    'prefer-rest-params': 'error',
    'prefer-template': 'warn',
    'require-await': 'warn',
    'use-isnan': 'warn'
  },
  /**
   * .eslintignore config, unlike .gitignore,
   *  "/" is used instead of "\"
   */
  ignorePatterns: [
    '.eslintrc.js',
    '*.config.{js,mjs,ts}',
    '.turbo',
    '.next',
    'node_modules',
    'dist',
    'build',
    'coverage',
    'storybook-static',
  ]
};
