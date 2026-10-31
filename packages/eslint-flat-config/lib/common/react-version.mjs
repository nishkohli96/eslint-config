import { createRequire } from 'node:module';

/**
 * eslint-plugin-react's `version: 'detect'` calls `context.getFilename()`,
 * which was removed in ESLint 10. Resolve the installed React version
 * here instead. React is looked up from the directory ESLint runs in and
 * then from this package. In a monorepo run from the root, set
 * `settings.react.version` in your config for the workspace's React version.
 */
function getReactVersion() {
  for (const base of [`${process.cwd()}/`, import.meta.url]) {
    try {
      return createRequire(base)('react/package.json').version;
    } catch {
      // try the next location
    }
  }
  process.emitWarning(
    'Could not find "react"; assuming the latest React version for eslint-plugin-react. '
    + 'Set `settings.react.version` in your ESLint config to silence this.',
    '@nish1896/eslint-flat-config'
  );
  return '999.999.999';
}

export default getReactVersion();
