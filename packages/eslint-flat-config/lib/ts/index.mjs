import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
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
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/member-delimiter-style': 'warn',
      '@stylistic/type-annotation-spacing': 'warn',
      '@stylistic/type-generic-spacing': 'warn',
      '@stylistic/type-named-tuple-spacing': 'warn',
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
    },
  },
  {
    ignores: ignoreDirsFiles,
  }
];

export default tsConfig;
