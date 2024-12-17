/**
 * Reference -
 *
 * https://eslint.org/docs/latest/use/configure/migration-guide#predefined-and-shareable-configs
 */
import jsConfig from '@nish1896/eslint-flat-config/js';
import jsxConfig from '@nish1896/eslint-flat-config/jsx';

export default [
  ...jsConfig,
  ...jsxConfig,
  {
    rules: {}
  }
];
