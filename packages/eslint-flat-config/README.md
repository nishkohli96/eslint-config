<p align="center">
  <img
    src="https://github.com/nishkohli96/eslint-config/blob/9a62a22ad6d2158051b3dcde8d02263448fa80e5/apps/eslint-config-docs/static/img/logo-transparent.png"
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
Built for ESLint `v10` with a focus on:
- Developer experience
- Readability
- Real-world usability

✨ Features
- ✅ ESLint `v10` flat config support
- ✅ Modular (use only what you need)
- ✅ TypeScript-aware linting
- ✅ React & accessibility support
- ✅ Works seamlessly with Next.js
- ✅ Clean, consistent stylistic rules via @stylistic

>This package is compatible with eslint **v10** and above (use `@nish1896/eslint-flat-config@3` for ESLint `v9`). For usage with eslint `8.57.1` or below check [@nish1896/eslint-config](https://www.npmjs.com/package/@nish1896/eslint-config).

## Requirements

| Requirement | Version |
|-|-|
| Node.js | `^20.19.0 \|\| ^22.13.0 \|\| >=24` |
| `eslint` | `>=10` |
| `typescript` (only for the `ts` / `next-ts` modules) | `>=4.8.4 <6.1.0` |

> `typescript-eslint` does not support TypeScript 7 yet. Some starters, such as the `create-vite` React + TypeScript template, ship `typescript ~7`. Pin `typescript` to `~6.0` until `typescript-eslint` adds support.

## Installation

<details open>
<summary><b>npm</b></summary>

```bash
npm i -D eslint @nish1896/eslint-flat-config
```
</details>

<details>
<summary><b>pnpm</b></summary>

```bash
pnpm add -D eslint @nish1896/eslint-flat-config
```
</details>

<details>
<summary><b>yarn</b></summary>

```bash
yarn add -D eslint @nish1896/eslint-flat-config
```
</details>


## Quick Setup

Copy the code snippet most relevant to your application and paste it in the `eslint.config.mjs` file in your project root.

Use the `ts` module only if your code is written in **Typescript**.

### Node.js

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

> The newer `create-vite` templates use [Oxlint](https://oxc.rs/docs/guide/usage/linter) by default. Oxlint does not read `eslint.config.mjs`. Choose the **ESLint** option when scaffolding, or install `eslint` yourself, to use this config.

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

Update the existing `eslint.config.mjs` file provided by your [Next.js](https://nextjs.org/) 16 app. Include `eslint-config-next/typescript` and the `next-ts` module only if your code is written in **Typescript**.

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

⚠️ Important Notes
- Do NOT use `jsxConfig` with `nextConfig`
- Next.js 15 and `eslint-config-next@15` only support ESLint 9 and below, so use `@nish1896/eslint-flat-config@3` there
- This config complements [Next.js ESLint](https://nextjs.org/docs/app/api-reference/config/eslint) — it does not replace it
- TypeScript configs require a valid tsconfig.json

For comprehensive details on installation, setup, rules, and usage, please refer the [Documentation](https://nish1896-eslint-config.vercel.app/introduction) 📖.

**If you're a React developer looking to build forms and Material UI interfaces faster, check out my open-source packages: [@nish1896/mui-components](https://www.npmjs.com/package/@nish1896/mui-components) and [@nish1896/rhf-mui-components](https://www.npmjs.com/package/@nish1896/rhf-mui-components).**
