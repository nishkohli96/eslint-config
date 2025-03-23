import globals from 'globals';
import stylisticJsx from '@stylistic/eslint-plugin-jsx'
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default [
  /* Global Language Options */
  {
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      ...reactPlugin.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@stylistic/jsx': stylisticJsx,
      'react-hooks': reactHooksPlugin
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
  },
  /* Recommended Configs */
  jsxA11y.flatConfigs.recommended,
  reactPlugin.configs.flat.recommended,
  {
    rules: {
      '@stylistic/jsx/jsx-closing-bracket-location': 'warn',
      '@stylistic/jsx/jsx-closing-tag-location': 'warn',
      '@stylistic/jsx/jsx-curly-newline': ['warn', 'consistent'],
      '@stylistic/jsx/jsx-curly-spacing': 'warn',
      '@stylistic/jsx/jsx-equals-spacing': 'warn',
      '@stylistic/jsx/jsx-indent': ['warn', 2],
      '@stylistic/jsx/jsx-indent-props': ['warn', 2],
      '@stylistic/jsx/jsx-one-expression-per-line': ['warn', { allow: 'literal' }],
      '@stylistic/jsx/jsx-pascal-case': 'warn',
      '@stylistic/jsx/jsx-props-no-multi-spaces': 'warn',
      '@stylistic/jsx/jsx-self-closing-comp': 'warn',
      '@stylistic/jsx/jsx-wrap-multilines': [
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
      'jsx-a11y/anchor-ambiguous-text': 'error',
      'jsx-a11y/control-has-associated-label': 'error',
      'no-alert': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': [
        'warn',
        {
          extensions: ['.tsx', '.jsx'],
        },
      ],
    },
  },
  {
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
  }
];
