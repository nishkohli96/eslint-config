import { createRequire } from 'node:module';

/**
 * eslint-plugin-react's `version: 'detect'` calls `context.getFilename()`,
 * which was removed in ESLint 10. Resolve the installed React version
 * here instead; fall back to the plugin's own "latest" sentinel.
 */
function getReactVersion() {
  try {
    const require = createRequire(`${process.cwd()}/`);
    return require('react/package.json').version;
  } catch {
    return '999.999.999';
  }
}

export default getReactVersion();
