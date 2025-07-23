import globals from 'globals';
import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin'
import ignoreDirsFiles from '../common/ignores.mjs';

const jsConfig = [
  /* Global Language Options */
  {
    name: '@nish1896/eslint-flat-config/js',
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest
      }
    },
    files: ['**/*.{js,mjs,cjs}']
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/array-bracket-spacing': 'warn',
      '@stylistic/arrow-parens': ['warn', 'as-needed'],
      '@stylistic/arrow-spacing': 'warn',
      '@stylistic/block-spacing': 'warn',
      '@stylistic/brace-style': 'warn',
      '@stylistic/comma-spacing': 'warn',
      '@stylistic/curly-newline': ['warn', { consistent: true }],
      '@stylistic/dot-location': ['warn', 'property'],
      '@stylistic/eol-last': 'warn',
      '@stylistic/function-call-argument-newline': ['warn', 'consistent'],
      '@stylistic/function-call-spacing': 'warn',
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
      '@stylistic/max-statements-per-line': 'warn',
      '@stylistic/multiline-ternary': ['warn', 'always-multiline'],
      '@stylistic/no-extra-semi': 'warn',
      '@stylistic/no-floating-decimal': 'warn',
      '@stylistic/no-mixed-spaces-and-tabs': 'warn',
      '@stylistic/no-multi-spaces': 'warn',
      '@stylistic/no-multiple-empty-lines': 'warn',
      '@stylistic/no-trailing-spaces': 'warn',
      '@stylistic/nonblock-statement-body-position': 'warn',
      '@stylistic/object-curly-newline': ['warn', { consistent: true }],
      '@stylistic/object-curly-spacing': ['warn', 'always'],
      '@stylistic/operator-linebreak': ['warn', 'before'],
      '@stylistic/quotes': ['warn', 'single'],
      '@stylistic/rest-spread-spacing': 'warn',
      '@stylistic/semi': 'warn',
      '@stylistic/semi-spacing': 'warn',
      '@stylistic/space-before-blocks': [
        'warn',
        {
          functions: 'always',
          classes: 'always',
          keywords: 'always'
        }
      ],
      '@stylistic/space-infix-ops': 'warn',
      '@stylistic/space-unary-ops': [
        'warn',
        {
          words: true,
          nonwords: false
        }
      ],
      '@stylistic/spaced-comment': 'warn',
      '@stylistic/switch-colon-spacing': 'warn',
      '@stylistic/template-curly-spacing': 'warn',
      '@stylistic/wrap-regex': 'warn',
      'array-callback-return': 'warn',
      'block-scoped-var': 'error',
      curly: 'warn',
      'default-case': 'warn',
      'default-case-last': 'warn',
      eqeqeq: 'error',
      'func-names': ['warn', 'as-needed'],
      'logical-assignment-operators': ['warn', 'always'],
      'max-params': ['warn', 5],
      'no-continue': 'warn',
      'no-debugger': 'warn',
      'no-duplicate-imports': 'warn',
      'no-empty-function': 'warn',
      'no-empty-static-block': 'warn',
      'no-eq-null': 'error',
      'no-implicit-coercion': 'warn',
      'no-inline-comments': 'off',
      'no-lonely-if': 'warn',
      'no-nested-ternary': 'warn',
      'no-plusplus': 'warn',
      'no-throw-literal': 'warn',
      'no-unneeded-ternary': 'warn',
      'no-unreachable': 'warn',
      'no-unused-vars': 'warn',
      'no-unused-expressions': 'warn',
      /* This rule available from v9 onwards */
      'no-useless-assignment': 'off',
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
     * Ignore linting the below folders...
     * "ignores" needs to be written at last, else linting
     * would also run on build folders.
     */
    ignores: ignoreDirsFiles
  }
];

export default jsConfig;
