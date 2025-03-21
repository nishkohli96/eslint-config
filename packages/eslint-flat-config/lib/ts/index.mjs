import tseslint from 'typescript-eslint';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import stylisticPlus from '@stylistic/eslint-plugin-plus';
import parserTs from '@typescript-eslint/parser';

export default [
  {
    plugins: {
      '@stylistic/ts': stylisticTs,
      '@stylistic/plus': stylisticPlus
    },
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    files: ['**/*.{ts,tsx}']
  },
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylistic,
  {
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
      '@typescript-eslint/consistent-generic-constructors': 'warn',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/consistent-type-exports': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
    }
  },
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
