---
sidebar_position: 0
sidebar_label: v3 to v4
description: Migration guide from v3 to v4 for @nish1896/eslint-flat-config, which supports ESLint v10 and above.
---

# Migration from v3 to v4

Version **4** of `@nish1896/eslint-flat-config` is built for **ESLint v10**. It is a breaking release, because ESLint 9 and below are no longer supported.

:::info
Staying on ESLint 9? Pin the previous major, it keeps working as before:

```bash
npm install @nish1896/eslint-flat-config@3 --save-dev
```
:::

## Breaking changes

| Area | v3 | v4 |
|-|-|-|
| `eslint` peer dependency | `>=9` | `>=10` |
| `@eslint/js` peer dependency | `>=9` | `>=10` |
| Node.js | `^18.18.0 \|\| ^20.9.0 \|\| >=21.1.0` | `^20.19.0 \|\| ^22.13.0 \|\| >=24` |
| `typescript` (`ts` and `next-ts` modules) | any version supported by `typescript-eslint` | `>=4.8.4 <6.1.0`, TypeScript 7 is not supported by `typescript-eslint` yet |
| Next.js | `eslint-config-next` 15 or 16 | `eslint-config-next` **16** |

## Migration steps

### 1. Upgrade Node.js

Use Node.js `^20.19.0`, `^22.13.0` or `>=24`. These are the versions ESLint 10 itself supports.

### 2. Upgrade ESLint and the package

```bash
# npm
npm install eslint@latest @nish1896/eslint-flat-config@latest --save-dev

# yarn
yarn add -D eslint@latest @nish1896/eslint-flat-config@latest @eslint/js@latest

# pnpm
pnpm add -D eslint@latest @nish1896/eslint-flat-config@latest
```

`@eslint/js` is a peer dependency. npm and pnpm install it automatically, with Yarn 1 you need to add it yourself.

Also read the official [ESLint v10 migration guide](https://eslint.org/docs/latest/use/migrate-to-10.0.0) for changes to ESLint itself, such as the removal of old context APIs from rules.

### 3. Pin TypeScript below 6.1

`typescript-eslint` does not support TypeScript 7 yet. Some starters, such as the latest `create-vite` React + TypeScript template, ship `typescript ~7`. Until support lands, install a 6.x release:

```bash
npm install typescript@~6.0 --save-dev
```

### 4. Next.js projects: use `eslint-config-next` v16

`eslint-config-next` **v15** only supports ESLint 9 and below. Upgrade to Next.js 16 and replace the `FlatCompat` setup with the flat exports of `eslint-config-next`:

```js title="eslint.config.mjs"
import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import jsConfig from '@nish1896/eslint-flat-config/js';
import nextConfig from '@nish1896/eslint-flat-config/next';
import nextTsConfig from '@nish1896/eslint-flat-config/next-ts';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ...jsConfig,
  ...nextConfig,
  ...nextTsConfig,
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts'
  ])
]);

export default eslintConfig;
```

### 5. Replace `tseslint.config()` (optional)

`tseslint.config()` from `typescript-eslint` is deprecated in favour of `defineConfig` from `eslint/config`. Your existing `eslint.config.mjs` keeps working, but you can switch:

```js title="eslint.config.mjs"
import { defineConfig, globalIgnores } from 'eslint/config';
import jsConfig from '@nish1896/eslint-flat-config/js';
import tsConfig from '@nish1896/eslint-flat-config/ts';
import jsxConfig from '@nish1896/eslint-flat-config/jsx';

export default defineConfig([
  globalIgnores(['dist']),
  {
    extends: [...jsConfig, ...tsConfig, ...jsxConfig]
  }
]);
```

Do not import `typescript-eslint` in the same file, the `js` module already registers it and a second registration gives a "Cannot redefine plugin" error.

## What changed internally

You do not need to act on these, they are listed for reference.

- `eslint-plugin-react` does not support ESLint 10 yet. The `jsx` module wraps it with `fixupPluginRules` from `@eslint/compat`, a new dependency of this package.
- `settings.react.version` is no longer `'detect'`, which crashes on ESLint 10. The package reads the installed `react` version from your project instead, and falls back to the latest version if React is not installed. Set `settings.react.version` in your own config to override it.
- `@typescript-eslint/parser` is now declared as a dependency, it was imported before without being listed.

If something breaks after upgrading, please [open an issue](https://github.com/nishkohli96/eslint-config/issues).
