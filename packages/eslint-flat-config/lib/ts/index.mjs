import tseslint from 'typescript-eslint';
import stylisticJs from '@stylistic/eslint-plugin-js';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import stylisticPlus from '@stylistic/eslint-plugin-plus';
import parserTs from '@typescript-eslint/parser';
import ignoreDirsFiles from '../common/ignores.mjs';

const tsConfig = [
  {
    name: '@nish1896/eslint-flat-config/ts',
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    files: ['**/*.{ts,tsx}']
  },
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylistic,
  {
    plugins: {
      '@stylistic/js': stylisticJs,
      '@stylistic/ts': stylisticTs,
      '@stylistic/plus': stylisticPlus
    },
    rules: {
      '@stylistic/ts/block-spacing': 'warn',
      '@stylistic/ts/brace-style': 'warn',
      '@stylistic/ts/comma-spacing': 'warn',
      '@stylistic/ts/key-spacing': 'warn',
      '@stylistic/ts/member-delimiter-style': 'warn',
      '@stylistic/ts/no-extra-semi': 'warn',
      '@stylistic/ts/object-curly-spacing': ['warn', 'always'],
      '@stylistic/ts/quotes': ['warn', 'single'],
      '@stylistic/ts/semi': 'warn',
      '@stylistic/ts/space-before-blocks': [
        'warn',
        {
          functions: 'always',
          classes: 'always',
          keywords: 'always'
        }
      ],
      '@stylistic/ts/space-infix-ops': 'warn',
      '@stylistic/ts/type-annotation-spacing': 'warn',
      '@stylistic/plus/type-generic-spacing': 'warn',
      '@stylistic/plus/type-named-tuple-spacing': 'warn',
      '@typescript-eslint/array-type': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/consistent-generic-constructors': [
        'warn',
        'constructor'
      ],
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/consistent-type-exports': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { fixStyle: 'inline-type-imports' }
      ],
      '@typescript-eslint/no-base-to-string': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-enum-comparison': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/require-await': 'warn',
      '@typescript-eslint/restrict-template-expressions': 'warn',
      /* Prevent warning when defining ENUMS */
      'no-unused-vars': 'off',
      /**
       * Disabling some rules from the js module, so that there are no
       * duplicate warning from both js and ts modules for the same issue.
       */
      '@stylistic/js/block-spacing': 'off',
      '@stylistic/js/brace-style': 'off',
      '@stylistic/js/comma-spacing': 'off',
      '@stylistic/js/key-spacing': 'off',
      '@stylistic/js/no-extra-semi': 'off',
      '@stylistic/js/object-curly-spacing': 'off',
      '@stylistic/js/quotes': 'off',
      '@stylistic/js/semi': 'off',
      '@stylistic/js/space-before-blocks': 'off',
      '@stylistic/js/space-infix-ops': 'off'
    },
  },
  {
    ignores: ignoreDirsFiles,
  }
];

export default tsConfig;
