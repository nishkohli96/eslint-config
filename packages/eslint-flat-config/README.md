<p align="center">
  <img
    src="https://github.com/nishkohli96/eslint-config/blob/8e89ede2f096989b6060801a74564aa95184a6bd/apps/eslint-config-docs/static/img/logo-transparent.png"
    alt="brand-logo"
    width="200"
  />
</p>

# @nish1896/eslint-flat-config

![NPM Version](https://img.shields.io/npm/v/%40nish1896%2Feslint-flat-config)
![NPM Downloads](https://img.shields.io/npm/dt/%40nish1896%2Feslint-flat-config)
![NPM Downloads Per Month](https://img.shields.io/npm/dm/%40nish1896%2Feslint-flat-config?color=%23e0e063)
![node-current](https://img.shields.io/node/v/%40nish1896%2Feslint-flat-config?color=%23e86267)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/nishkohli96/eslint-config)

**A modern, modular ESLint flat config for JavaScript, TypeScript, React, and Next.js.**
Built for ESLint v9+ with a focus on:
- Developer experience
- Readability
- Real-world usability

✨ Features
- ✅ ESLint v9 flat config support
- ✅ Modular (use only what you need)
- ✅ TypeScript-aware linting
- ✅ React & accessibility support
- ✅ Works seamlessly with Next.js
- ✅ Clean, consistent stylistic rules via @stylistic


>This package is compatible with eslint **v9** and above. For usage with eslint `8.57.1` or below check [@nish1896/eslint-config](https://www.npmjs.com/package/@nish1896/eslint-config).

## Quick Setup

Copy the code snippet most relevant to your application and paste it in the `eslint.config.mjs` file in your project root.

### Node.js

Use the `ts` module only if your code is written in **Typescript**.

```js
import jsConfig from '@nish1896/eslint-flat-config/js';
import tsConfig from '@nish1896/eslint-flat-config/ts';

export default [
  ...jsConfig,
  ...tsConfig
];
```
### React.js & Vite

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
### Next.js

Update the existing `eslint.config.mjs` file provided by [Next.js](https://nextjs.org/) app. Include the `next/typescript` and `next-ts` modules only if your code is written in **Typescript**.

#### Version 16

```js
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

#### Version 15
```js
import jsConfig from '@nish1896/eslint-flat-config/js';
import nextConfig from '@nish1896/eslint-flat-config/next';
import nextTsConfig from '@nish1896/eslint-flat-config/next-ts';

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...jsConfig,
  ...nextConfig,
  ...nextTsConfig,
];

export default eslintConfig;
```

⚠️ Important Notes
- Do NOT use `jsxConfig` with `nextConfig`
- This config complements [Next.js ESLint](https://nextjs.org/docs/app/api-reference/config/eslint) — it does not replace it
- TypeScript configs require a valid tsconfig.json

For comprehensive details on installation, setup, rules, and usage, please refer the [Documentation](https://nish1896-eslint-config.vercel.app/introduction) 📖.

**If you are a React developer, I highly recommend checking out my package, [@nish1896/rhf-mui-components](https://www.npmjs.com/package/@nish1896/rhf-mui-components).**
