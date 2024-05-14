import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import reactHooksPlugin from 'eslint-plugin-react-hooks';

/**
 * As of now "jsxA11yPlugin" doesnt seem to have
 * been updated to use flat-config
 */
export default [
  pluginReactConfig,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: globals.browser
    },
    plugins: {
      '@stylistic': stylistic,
      'jsx-a11y': jsxA11yPlugin,
      //react: reactPlugin,
      'react-hooks': reactHooksPlugin
    },
    rules: {
      '@stylistic/jsx-closing-bracket-location': 'warn',
      '@stylistic/jsx-closing-tag-location': 'warn',
      '@stylistic/jsx-curly-newline': ['warn', 'consistent'],
      '@stylistic/jsx-curly-spacing': 'warn',
      '@stylistic/jsx-equals-spacing': 'warn',
      '@stylistic/jsx-indent': ['warn', 2],
      '@stylistic/jsx-indent-props': ['warn', 2],
      '@stylistic/jsx-one-expression-per-line': ['warn', { allow: 'literal' }],
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
          return: 'parens-new-line',
        },
      ],
      'jsx-a11y/anchor-ambiguous-text': 'error',
      'jsx-a11y/control-has-associated-label': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-vars': 'error',
      'react/jsx-filename-extension': [
        'warn',
        {
          extensions: ['.tsx', '.jsx'],
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    ignores: [
      'node_modules',
      'dist',
      'build',
      'coverage',
      '.next',
      '.turbo',
      '.eslintrc.js',
      '.d.ts',
    ],
  },
];
