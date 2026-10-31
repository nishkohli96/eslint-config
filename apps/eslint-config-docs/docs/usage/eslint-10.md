---
sidebar_position: 1
sidebar_label: Eslint v10
description: Usage of @nish1896/eslint-flat-config with eslint version 10 for node, react and next.js applications.
title: Usage with Eslint version 10
---

:::note
If you are upgrading from **version 1** of this package, please refer the [migration guide](../migration/eslint-flat-config/v1_to_v2.md).
:::

:::info
This version needs ESLint and `@eslint/js` **v10 or above**. For ESLint 9, use `@nish1896/eslint-flat-config@4`. The `ts` and `next-ts` modules use `typescript-eslint`, which supports `typescript` **below 6.1** only, so pin it to `~6.0` if your starter ships TypeScript 7.
:::

If you have specified `"type": "module"` in the `package.json` of your application, create a `eslint.config.js` file, else use `eslint.config.mjs` file. 

```bash
touch eslint.config.mjs
```

## Node.js

The `js` import extends rules from the [typescript-eslint](https://www.npmjs.com/package/typescript-eslint) package. 

```js title="eslint.config.mjs"
import jsConfig from '@nish1896/eslint-flat-config/js';

export default [
  ...jsConfig,
  {
    rules: {}
  }
];
```

<h4>With Typescript</h4>

```js title="eslint.config.mjs"
import jsConfig from '@nish1896/eslint-flat-config/js';
import tsConfig from '@nish1896/eslint-flat-config/ts';

export default [
  ...jsConfig,
  ...tsConfig,
  {
    rules: {}
  }
];
```

## React & Vite

Use both `js` and `jsx` rules from the package for React and Vite applications.

:::note
The latest `create-vite` templates use [Oxlint](https://oxc.rs/docs/guide/usage/linter) by default, which does not read `eslint.config.mjs`. Choose the **ESLint** option when scaffolding, or install `eslint` in the project, to use this package.
:::

```js title="eslint.config.mjs"
import jsConfig from '@nish1896/eslint-flat-config/js';
import jsxConfig from '@nish1896/eslint-flat-config/jsx';

export default [
  ...jsConfig,
  ...jsxConfig,
  {
    rules: {}
  }
];
```

<h4>With Typescript</h4>

```js title="eslint.config.mjs"
import jsConfig from '@nish1896/eslint-flat-config/js';
import tsConfig from '@nish1896/eslint-flat-config/ts';
import jsxConfig from '@nish1896/eslint-flat-config/jsx';

export default [
  ...jsConfig,
  ...tsConfig,
  ...jsxConfig,
  {
    rules: {}
  }
];
```

## Next.js

A dedicated ESLint configuration for [Next.js](https://nextjs.org/) applications integrates seamlessly with the `create-next-app` boilerplate, which sets up projects using Next.js **version 16**. This simplifies setup, ensuring compatibility and optimized linting rules tailored for Next.js applications.

The `next` and `next-ts` modules in this package consolidates rules from both `jsx` and `typescript` configurations, extending the respective [stylistic](https://eslint.style/packages/default) plugin. It leverages the `typescript-eslint` and other React plugins provided by [eslint-config-next](https://www.npmjs.com/package/eslint-config-next), ensuring no need to duplicate plugin configurations for Next.js projects and to prevent the [redefine plugin error](#duplicate-import-error).

```js title="eslint.config.mjs"
import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import jsConfig from '@nish1896/eslint-flat-config/js';
import nextConfig from '@nish1896/eslint-flat-config/next';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...jsConfig,
  ...nextConfig,
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts'
  ])
]);

export default eslintConfig;
```

### With Typescript

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

## Duplicate Import Error

For ESLint 10, the error _**"Cannot redefine plugin @typescript-eslint"**_ or anything similar occurs because the `@typescript-eslint` plugin is initialized twice: once from the `ts` config of this package and then from your current configuration. To fix this:

- Remove `@typescript-eslint` from the plugins key in your ESLint config.
- Let the `ts` module of **@nish1896/eslint-flat-config** manage the plugin initialization.
- Configure or turn off any rule in the `rules` key of eslint config.

This approach ensures no duplication while retaining flexibility for rule customization.
