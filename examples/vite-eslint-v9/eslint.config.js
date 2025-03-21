/**
 * Duplicate import of tseslint in this file and from jsConfig of
 * @nish1896/eslint-flat-config/js gives error. Hence simply extend
 * "jsConfig" and "jsxConfig" from the package which by default takes
 * care of extending the recommended js and tseslint configuraton.
 */
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import jsConfig from '@nish1896/eslint-flat-config/js';
import tsConfig from '@nish1896/eslint-flat-config/ts';
import jsxConfig from '@nish1896/eslint-flat-config/jsx';

export default tseslint.config(
  {
    extends: [
      ...jsConfig,
      ...tsConfig,
      // ...jsxConfig
    ],
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
