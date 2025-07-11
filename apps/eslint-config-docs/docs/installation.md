---
sidebar_position: 3
sidebar_label: Installation
description: How to install this package using npm, yarn or pnpm?
title: Installation
---

# Installation

Depending on the ESLint version used in your project, you can choose:

- [@nish1896/eslint-flat-config](https://www.npmjs.com/package/@nish1896/eslint-flat-config) for ESLint v9
- [@nish1896/eslint-config](https://www.npmjs.com/package/@nish1896/eslint-config) for ESLint v8

However, since **ESLint v8 and below are now deprecated**, upgrading to v9 is recommended for ongoing support and improvements.

:::note
In case you are upgrading to eslint **v9 or above** , please check the [eslint 8 to 9 migration guide](./migration/eslint-8_to_9.md).

📘 This version of the documentation focuses on the installation and usage of `@nish1896/eslint-flat-config`. For information on `@nish1896/eslint-config`, please refer to [version 3](/3.0/installation) of the docs.
:::

You'll first need to install [ESLint](https://eslint.org/). If you project is a monorepo, consider creating a separate eslint-config for each package.

Please do refer the official docs to [install eslint](https://eslint.org/docs/latest/use/getting-started) if needed.

```bash
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
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) 
- [typescript-eslint](https://www.npmjs.com/package/typescript-eslint)
