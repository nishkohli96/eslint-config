import jsConfig from '@nish1896/eslint-flat-config/js';
import reactConfig from '@nish1896/eslint-flat-config/jsx';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { ignores: ['build', 'dist'] },
  ...jsConfig,
  ...reactConfig
];
