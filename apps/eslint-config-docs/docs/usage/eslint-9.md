---
sidebar_position: 2
sidebar_label: Eslint 9
description: Import and use this configuration with eslint version 9.
title: Usage with eslint 9
---

:::note
Use [@nish1896/eslint-flat-config](https://www.npmjs.com/package/@nish1896/eslint-flat-config) for eslint version ***9 and above***.
:::

If you have specified `"type": "module"` in the `package.json` of your application, create a `eslint.config.js` file, else use `eslint.config.mjs` file. 

```sh
touch eslint.config.mjs
```

### NodeJS

The `js` import extends rules from the [typescript-eslint](https://www.npmjs.com/package/typescript-eslint) package. 

```js
import jsEslintConfig from '@nish1896/eslint-flat-config/js';

export default [
  ...jsEslintConfig,
  {
    rules: {}
  }
];
```

### React & Vite

Use both `js` and `jsx` rules from the package for React and Vite applications.

```js
import jsEslintConfig from '@nish1896/eslint-flat-config/js';
import jsxEslintConfig from '@nish1896/eslint-flat-config/jsx';

export default [
  ...jsEslintConfig,
  ...jsxEslintConfig,
  {
    rules: {}
  }
];
```

### NextJS

A dedicated ESLint configuration for [Next.js](https://nextjs.org/) applications is now available since version **1.1.0** of the package. It integrates seamlessly with the `create-next-app` boilerplate, which sets up projects using Next.js version 15. This simplifies setup, ensuring compatibility and optimized linting rules tailored for Next.js applications.

The `next` module in this package consolidates rules from both `js` and `jsx` configurations, extending the [stylistic](https://www.npmjs.com/package/@stylistic/eslint-plugin) plugin. It leverages the `typescript-eslint` and other React plugins provided by [eslint-config-next](https://www.npmjs.com/package/eslint-config-next), ensuring no need to duplicate plugin configurations for Next.js projects and to prevent the [redefine plugin error](#duplicate-import-error).

```js
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import nextConfig from '@nish1896/eslint-flat-config/next';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...nextConfig,
  ...compat.extends('next/core-web-vitals', 'next/typescript')
];

export default eslintConfig;
```

Make sure to preserve the order of the imports to avoid getting the `Error: 'React' is not defined.  no-undef` linting error, else this needs to be manually fixed in the code.

### Duplicate Import Error

For ESLint 9, the error _**"Cannot redefine plugin @typescript-eslint"**_ or anything similar occurs because the `@typescript-eslint` plugin is initialized twice: once from the `js` config of this package and then from your current configuration. To fix this:

- Remove `@typescript-eslint` from the plugins key in your ESLint config.
- Let the `js` of **@nish1896/eslint-config** import manage the plugin initialization.
- Adjust any rule overrides under the rules key in your config.

This approach ensures no duplication while retaining flexibility for rule customization.
