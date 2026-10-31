/**
 * Reference -
 *
 * https://eslint.org/docs/latest/use/configure/migration-guide#predefined-and-shareable-configs
 */
import jsConfig from '@nish1896/eslint-flat-config/js';
import jsxConfig from '@nish1896/eslint-flat-config/jsx';

/**
 * The jsx module only matches .jsx and .tsx files. This example keeps its
 * JSX in a .js file, so apply the jsx rules (and JSX parsing) to .js as well.
 */
const jsxInJsFiles = jsxConfig.map(config => ({
  ...config,
  files: ['**/*.{js,jsx}']
}));

export default [
  ...jsConfig,
  ...jsxInJsFiles,
  {
    rules: {}
  }
];
