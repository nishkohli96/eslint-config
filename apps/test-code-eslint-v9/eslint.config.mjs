/**
 * Reference -
 * 
 * https://eslint.org/docs/latest/use/configure/migration-guide#predefined-and-shareable-configs
 */
import jsEslintConfig from '@nish1896/eslint-flat-config/js';
import jsxEslintConfig from '@nish1896/eslint-flat-config/jsx';

export default [
  ...jsEslintConfig,
  ...jsxEslintConfig, 
  {
    rules: {}
  }
];
