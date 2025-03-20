import tseslint from 'typescript-eslint';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import parserTs from '@typescript-eslint/parser';

export default [
  {
    plugins: {
      '@stylistic/ts': stylisticTs
    },
    languageOptions: {
      parser: parserTs
    },
    files: ['**/*.{ts,tsx}']
  },
  ...tseslint.configs.recommended,
  {
    rules: {
			'@stylistic/ts/block-spacing': 'warn',
			'@stylistic/ts/brace-style': 'warn',
      '@stylistic/ts/comma-spacing': 'warn',
      '@stylistic/ts/key-spacing': 'warn',
      '@stylistic/ts/member-delimiter-style': 'warn',
      '@stylistic/ts/no-extra-semi': 'warn',
      '@stylistic/ts/object-curly-spacing': ['warn', 'always'],
      '@stylistic/ts/operator-linebreak': ['warn', 'before'],
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
      '@stylistic/ts/type-annotation-spacing': 'warn'
    }
  },
  {
    ignores: ['node_modules', 'dist', 'build', 'coverage', '.turbo']
  }
];
