import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
import ignoreDirsFiles from '../common/ignores.mjs';

const nextTsConfig = [
  {
    name: '@nish1896/eslint-flat-config/next',
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        ...globals.serviceworker,
        ...globals.browser
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    files: ['**/*.{ts,tsx}']
  },
  {
    plugins: {
      '@stylistic': stylistic
    },
    settings: {
      react: {
        version: 'detect',
        'jsx-runtime': true
      }
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
    ignores: ignoreDirsFiles,
  },
];

export default nextTsConfig;
