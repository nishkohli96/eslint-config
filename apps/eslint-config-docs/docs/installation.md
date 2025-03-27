---
sidebar_position: 3
sidebar_label: Installation
description: How to install this package using npm, yarn or pnpm?
title: Installation
---

# Installation

Depending on the ESLint version used in your project, you can choose:

- [@nish1896/eslint-config](https://www.npmjs.com/package/@nish1896/eslint-config) for ESLint v8
- [@nish1896/eslint-flat-config](https://www.npmjs.com/package/@nish1896/eslint-flat-config) for ESLint v9

However, since ESLint v8 and below are now deprecated, upgrading to v9 is recommended for ongoing support and improvements.

:::note

In case you are upgrading to eslint **v9 or above** , please check the [migration guide](./migration/eslint-8_to_9.md).

If you are using eslint v8 and are migrating from `v1.0.x`, please check [this guide](./migration/eslint-config/v1_to_v2.md).
:::

You'll first need to install [ESLint](https://eslint.org/). If you project is a monorepo, consider creating a separate eslint-config for each package.

Please do refer the official docs to [install eslint](https://eslint.org/docs/latest/use/getting-started) if needed.

### Eslint 9 and above

```babash
npm i eslint --save-dev
```
```bash
yarn add -D eslint
```
```bash
pnpm add -D eslint
```

Next, install `@nish1896/eslint-flat-config`.

```bash
npm install @nish1896/eslint-flat-config  --save-dev
```
```bash
yarn add -D @nish1896/eslint-flat-config
```
```bash
pnpm add -D @nish1896/eslint-flat-config
```

### Eslint 8

We will be installing **v8.57.1** which was the last major version prior to the release of version 9.

```bash
npm i eslint@8.57.1 --save-dev
```
```bash
yarn add -D eslint@8.57.1
```
```bash
pnpm add -D eslint@8.57.1
```

Next, install `@nish1896/eslint-config`.

```bash
npm install @nish1896/eslint-config  --save-dev
```
```bash
yarn add -D @nish1896/eslint-config
```
```bash
pnpm add -D @nish1896/eslint-config
```

### Setup

Paste the following scripts in your `package.json` file

```bash
"lint": "eslint",
"lint:fix": "eslint --fix"
```

The first script will check for lint warnings in your code while the second script will format code as per the rules specified in the eslint configuration of your application. The remaining warnings or errors need to be manually fixed by the developer.

:::tip
You can also add *"lint"* command to your `package.json` file through command line.

```bash
npm pkg set scripts.lint="eslint --fix ."
```
:::

After that, you can run ESLint on any file or directory like this:

```bash
npx eslint yourfile.js
```
```bash
yarn eslint yourfile.jsx
```
```bash
pnpm eslint yourfile.tsx
```

This config extends the following plugins - 
- [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin)
  - [@stylistic/eslint-plugin-js](https://www.npmjs.com/package/@stylistic/eslint-plugin-js)
  - [@stylistic/eslint-plugin-ts](https://www.npmjs.com/package/@stylistic/eslint-plugin-ts)
  - [@stylistic/eslint-plugin-jsx](https://www.npmjs.com/package/@stylistic/eslint-plugin-jsx)
  - [@stylistic/eslint-plugin-plus](https://www.npmjs.com/package/@stylistic/eslint-plugin-plus)
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) 
- [typescript-eslint](https://www.npmjs.com/package/typescript-eslint)
