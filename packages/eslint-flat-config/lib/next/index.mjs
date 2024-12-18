/**
 * This eslintConfig file for NextJS v15 and above combines rules
 * from both "js" and "jsx" imports of this package.
 * 
 * Import of the following plugins will be handled from the inbuild
 * eslintConfig provided by NextJS, so that there is no error wrt
 * redefining plugins.
 * - tselint
 * - jsxA11y
 * - reactPlugin
 * - reactHooksPlugin
 */

import globals from 'globals';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

export default [
  /* Global Language Options */
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node,
				...globals.browser,
        ...globals.jest
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
      },
    },
  },

  /* File and ignore patterns */
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ignores: [
      'node_modules',
      'dist',
      'build',
      'coverage',
      '.next',
      '.turbo',
      '.eslintcache',
      'storybook-static',
    ],
  },

  /* Recommended Configs */
  js.configs.recommended,

  /* Plugins & Rules */
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/array-bracket-spacing': 'warn',
      '@stylistic/arrow-parens': ['warn', 'as-needed'],
      '@stylistic/arrow-spacing': 'warn',
      '@stylistic/block-spacing': 'warn',
      '@stylistic/brace-style': 'warn',
      '@stylistic/comma-spacing': 'warn',
      '@stylistic/eol-last': 'warn',
      '@stylistic/function-call-argument-newline': ['warn', 'consistent'],
      '@stylistic/function-paren-newline': ['warn', 'consistent'],
      '@stylistic/indent': [
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
      '@stylistic/indent-binary-ops': ['warn', 2],
      '@stylistic/key-spacing': 'warn',
      '@stylistic/linebreak-style': 'warn',
      '@stylistic/no-extra-semi': 'warn',
      '@stylistic/no-floating-decimal': 'warn',
      '@stylistic/no-mixed-spaces-and-tabs': 'warn',
      '@stylistic/no-multi-spaces': 'warn',
      '@stylistic/no-multiple-empty-lines': 'warn',
      '@stylistic/no-trailing-spaces': 'warn',
      '@stylistic/object-curly-newline': ['warn', { consistent: true }],
      '@stylistic/object-curly-spacing': ['warn', 'always'],
      '@stylistic/operator-linebreak': ['warn', 'before'],
      '@stylistic/quotes': ['warn', 'single'],
      '@stylistic/rest-spread-spacing': 'warn',
      '@stylistic/semi-spacing': 'warn',
      '@stylistic/space-before-blocks': [
        'warn',
        {
          functions: 'always',
          classes: 'always',
          keywords: 'always',
        },
      ],
      '@stylistic/space-infix-ops': 'warn',
      '@stylistic/space-unary-ops': [
        'warn',
        {
          words: true,
          nonwords: false,
        },
      ],
      '@stylistic/spaced-comment': 'warn',
      '@stylistic/switch-colon-spacing': 'warn',
      '@stylistic/template-curly-spacing': 'warn',
      '@stylistic/type-annotation-spacing': 'warn',
      '@stylistic/type-generic-spacing': 'warn',
      '@stylistic/type-named-tuple-spacing': 'warn',
      '@stylistic/wrap-regex': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-this-alias': 'off',
      'array-callback-return': 'warn',
      curly: 'warn',
      'default-case': 'warn',
      eqeqeq: 'error',
      'func-names': ['warn', 'as-needed'],
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
      semi: ['warn', 'always'],
			'react/react-in-jsx-scope': 'off',
      'require-await': 'warn',
      'use-isnan': 'warn',
    },
  },
];
