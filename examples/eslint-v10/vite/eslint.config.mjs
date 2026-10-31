import { defineConfig, globalIgnores } from 'eslint/config';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsConfig from '@nish1896/eslint-flat-config/js';
import tsConfig from '@nish1896/eslint-flat-config/ts';
import jsxConfig from '@nish1896/eslint-flat-config/jsx';

export default defineConfig([
  globalIgnores(['dist']),
  {
    extends: [
      ...jsConfig,
      ...tsConfig,
      ...jsxConfig
    ],
    plugins: {
      'react-refresh': reactRefresh
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ]
    }
  }
]);
