# @nish1896/eslint-flat-config

![NPM Version](https://img.shields.io/npm/v/%40nish1896%2Feslint-flat-config)
![NPM Downloads](https://img.shields.io/npm/dt/%40nish1896%2Feslint-flat-config)
![NPM Downloads Per Month](https://img.shields.io/npm/dm/%40nish1896%2Feslint-flat-config?color=%23e0e063)
![node-current](https://img.shields.io/node/v/%40nish1896%2Feslint-flat-config?color=%23e86267)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/nishkohli96/eslint-config)

**A set of developer-friendly [eslint](https://eslint.org/), [stylistic](https://eslint.style/), [typescript](https://www.typescriptlang.org/) and [accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility) configuration rules to help you and fellow developers follow the industry-recommended coding practices for easier readability, maintenance and productivity !**

>This package is compatible with eslint `9.0.0` or above. For usage with eslint `8.57.1` or below check [@nish1896/eslint-config](https://www.npmjs.com/package/@nish1896/eslint-config).

## Quick Setup

Copy the code snippet most relevant to your application and paste it in the `eslint.config.mjs` file in your project root.

- Node.js App

Use the `ts` module only if your code is written in **Typescript**.

```js
import jsConfig from '@nish1896/eslint-flat-config/js';
import tsConfig from '@nish1896/eslint-flat-config/ts';

export default [
  ...jsConfig,
  ...tsConfig
];
```
- React & Vite

Use the `ts` module only if your code is written in **Typescript**.

```js
import jsConfig from '@nish1896/eslint-flat-config/js';
import tsConfig from '@nish1896/eslint-flat-config/ts';
import jsxConfig from '@nish1896/eslint-flat-config/jsx';

export default [
  ...jsConfig,
  ...tsConfig,
  ...jsxConfig,
];
```
- Next

Update the existing `eslint.config.mjs` file provided by [Next.js](https://nextjs.org/) app. Include the `next/typescript` and `next` 
modules only if your code is written in **Typescript**.

```js
import jsConfig from '@nish1896/eslint-flat-config/js';
import nextTsConfig from '@nish1896/eslint-flat-config/next-ts';
import nextConfig from '@nish1896/eslint-flat-config/next';

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...jsConfig,
  ...nextTsConfig,
  ...nextConfig,
];

export default eslintConfig;
```

For comprehensive details on installation, setup, rules, and usage, please refer the [Documentation](https://nish1896-eslint-config.vercel.app/introduction) 📖.

**If you are a React developer, I highly recommend checking out my package, [@nish1896/rhf-mui-components](https://www.npmjs.com/package/@nish1896/rhf-mui-components).**