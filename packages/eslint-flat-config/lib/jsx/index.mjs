import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin'
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import ignoreDirsFiles from '../common/ignores.mjs';

const jsxConfig = [
  /* Global Language Options */
  {
    name: '@nish1896/eslint-flat-config/jsx',
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
        ecmaFeatures: {
          jsx: true
        }
      },
    },
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}']
  },

  /* Recommended Configs */
  jsxA11y.flatConfigs.recommended,
  reactPlugin.configs.flat.recommended,

  /* Rules for JavaScript and JSX Files */
  {
    plugins: {
      '@stylistic': stylistic,
      'react-hooks': reactHooksPlugin
    },
    settings: {
      react: {
        version: 'detect',
        'jsx-runtime': true
      }
    },
    rules: {
      '@stylistic/jsx-closing-bracket-location': 'warn',
      '@stylistic/jsx-closing-tag-location': 'warn',
      '@stylistic/jsx-curly-newline': ['warn', 'consistent'],
      '@stylistic/jsx-curly-spacing': 'warn',
      '@stylistic/jsx-equals-spacing': 'warn',
      '@stylistic/jsx-indent-props': ['warn', 2],
      '@stylistic/jsx-one-expression-per-line': [
        'warn',
        { allow: 'literal' }
      ],
      '@stylistic/jsx-pascal-case': 'warn',
      '@stylistic/jsx-props-no-multi-spaces': 'warn',
      '@stylistic/jsx-quotes': ['warn', 'prefer-double'],
      '@stylistic/jsx-self-closing-comp': 'warn',
      '@stylistic/jsx-wrap-multilines': [
        'warn',
        {
          arrow: 'parens-new-line',
          assignment: 'parens-new-line',
          condition: 'parens-new-line',
          declaration: 'parens-new-line',
          logical: 'parens-new-line',
          return: 'parens-new-line'
        }
      ],
      'jsx-a11y/anchor-ambiguous-text': 'error',
      'jsx-a11y/control-has-associated-label': 'error',
      'no-alert': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': [
        'warn',
        {
          extensions: ['.tsx', '.jsx']
        }
      ]
    },
    ignores: ignoreDirsFiles,
  },
];

export default jsxConfig;
