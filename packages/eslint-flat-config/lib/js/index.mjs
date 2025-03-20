import globals from 'globals';
import stylisticJs from '@stylistic/eslint-plugin-js';

export default [
  /* Global Language Options */
  {
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest
      }
    },
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      '@stylistic/js': stylisticJs
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
      //      '@stylistic/js/indent-binary-ops': ['warn', 2],
      '@stylistic/jsx-quotes': ['warn', 'prefer-double'],
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
      '@stylistic/js/wrap-regex': 'warn'
    }
  },
  /**
   * Ignore linting the below folders...
   * "ignores" needs to be written at last, else linting
   * would also run on build folders.
   */
  {
    ignores: [
      'node_modules',
      'dist',
      'build',
      'coverage',
      '.turbo'
    ]
  }
];
