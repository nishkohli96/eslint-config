/**
 * Reference -
 * 
 * https://eslint.org/docs/latest/use/configure/migration-guide#predefined-and-shareable-configs
 */
import jsEslintConfig from '@nish1896/eslint-flat-config/js';
import reactEslintConfig from '@nish1896/eslint-flat-config/react';

export default [
  ...jsEslintConfig,
  ...reactEslintConfig, 
  {
    rules: {}
  }
];
