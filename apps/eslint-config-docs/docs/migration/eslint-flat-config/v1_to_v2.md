---
sidebar_position: 1
sidebar_label: v1 to v2
description: Migration guide from v1 to v2 for @nish1896/eslint-flat-config.
---

# Migration from v1 to v2

Starting from **version 2**, this package has been modularized into the following independent components, enabling developers to apply rules specific to their framework and whether their project uses **TypeScript**:

- `js`: [Eslint](https://eslint.org/docs/latest/rules/) and [stylistic](https://eslint.style/packages/js) rules for javascript
- `ts`: TypeScript-specific rules, including [stylistic](https://eslint.style/packages/ts) and [typescript-eslint](https://typescript-eslint.io/rules/)
- `jsx`: Rules for [React](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules), [React Hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks), [JSX A11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main?tab=readme-ov-file#supported-rules), and [stylistic JSX](https://eslint.style/packages/jsx)
- `next`:  JSX rules designed for use alongside the `eslint-plugin-next` package 
- `next-ts`: [Typescript-eslint](https://typescript-eslint.io/rules/) and [Stylistic-ts](https://eslint.style/packages/ts) rules tailored for [Next.js](https://nextjs.org/) apps.


## Node.js

If you are using **typescript** in your project, add the `ts` module from this package, the rest of the config file remains the same.

```diff
import jsConfig from '@nish1896/eslint-flat-config/js';
+ import tsConfig from '@nish1896/eslint-flat-config/ts';

export default [
  ...jsConfig,
+ ...tsConfig,
  {
    rules: {}
  }
];
```

## React & Vite

Add the `ts` module from this package, if your application uses **typescript**.

```diff
import jsConfig from '@nish1896/eslint-flat-config/js';
+ import tsConfig from '@nish1896/eslint-flat-config/ts';
import jsxConfig from '@nish1896/eslint-flat-config/jsx';

export default [
  ...jsConfig,
+ ...tsConfig,
  ...jsxConfig,
];
```

## Next.js

In version 2, the next module now exclusively includes JSX-specific rules to be used alongside the [eslint-plugin-next](https://www.npmjs.com/package/eslint-plugin-next). To apply JavaScript and TypeScript rules, you must import them separately from the `js` and `next-ts` modules of this package.

<h4>Javascript</h4>

```diff
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
+ import jsConfig from '@nish1896/eslint-flat-config/js';
import nextConfig from '@nish1896/eslint-flat-config/next';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
+ ...jsConfig,
  ...nextConfig,
  {
    rules: {
    }
  }
];

export default eslintConfig;
```

<h4>With Typescript</h4>

The `next-ts` module contains the typescript specific rules for [Next.js](https://nextjs.org/) application.

```diff
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
+ import jsConfig from '@nish1896/eslint-flat-config/js';
import nextConfig from '@nish1896/eslint-flat-config/next';
+ import nextTsConfig from '@nish1896/eslint-flat-config/next-ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
+ ...jsConfig,
  ...nextConfig,
+ ...nextTsConfig,
  {
    rules: {
    }
  }
];

export default eslintConfig;
```
