/**
 * This eslintConfig file for NextJS v15 and above combines rules
 * from both "js" and "jsx" imports of this package.
 * 
 * Import of the following plugins will be handled from the inbuild
 * eslintConfig provided by NextJS, so that there is no error wrt
 * redefining plugins.
 * - tselint
 * - jsxA11y
 * - reactPlugin
 * - reactHooksPlugin
 */

import globals from 'globals';
import js from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';
import stylisticPlus from '@stylistic/eslint-plugin-plus';

export default [
  /* Global Language Options */
  {
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        ...globals.node,
				...globals.browser,
        ...globals.jest
      },
			parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@stylistic/js': stylisticJs,
      '@stylistic/plus': stylisticPlus
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {

    },
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
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
