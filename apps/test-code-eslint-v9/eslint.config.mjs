/**
 * Reference -
 * 
 * https://eslint.org/docs/latest/use/configure/migration-guide#predefined-and-shareable-configs
 */
// import js from '@eslint/js';
import jsEslintConfig from '@nish1896/eslint-config-flat/js';
import reactEslintConfig from '@nish1896/eslint-config-flat/react';

export default [
  // js.configs.recommended,
  ...jsEslintConfig,
  ...reactEslintConfig, 
  // {
  //   rules: {}
  // }
];
