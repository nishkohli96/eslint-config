---
sidebar_position: 3
sidebar_label: Installation
description: How to install this package using npm, yarn or pnpm?
title: Installation
---

# Installation

:::note
In case you are upgrading to eslint **v9 or above** , please check the [migration guide](./migration/eslint-8_to_9.md).

If you are using eslint v8 and are migrating from `v1.0.x`, please check [this guide](./migration/v1_to_v2.md).
:::

You'll first need to install [ESLint](https://eslint.org/). If you project is a monorepo, consider creating a separate eslint-config for each package.

Please do refer the official docs to [install eslint](https://eslint.org/docs/latest/use/getting-started) if needed.

### Eslint 9 and above

```sh
npm i eslint --save-dev
```
```sh
yarn add -D eslint
```
```sh
pnpm add -D eslint
```

Next, install `@nish1896/eslint-flat-config`.

```sh
npm install @nish1896/eslint-flat-config  --save-dev
```
```sh
yarn add -D @nish1896/eslint-flat-config
```
```sh
pnpm add -D @nish1896/eslint-flat-config
```

### Eslint 8

We will be installing **v8.57.1** which was the last major version prior to the release of version 9.

```sh
npm i eslint@8.57.1` --save-dev
```
```sh
yarn add -D eslint@8.57.1`
```
```sh
pnpm add -D eslint@8.57.1`
```

Next, install `@nish1896/eslint-config`.

```sh
npm install @nish1896/eslint-config  --save-dev
```
```sh
yarn add -D @nish1896/eslint-config
```
```sh
pnpm add -D @nish1896/eslint-config
```

### Setup

Paste the following scripts in your `package.json` file

```sh
"lint": "eslint",
"lint:fix": "eslint --fix"
```

The first script will check for lint warnings in your code while the second script will format code as per the rules specified in the eslint configuration of your application. The remaining warnings or errors need to be manually fixed by the developer.

:::tip
You can also add *"lint"* command to your `package.json` file through command line.

```sh
npm pkg set scripts.lint="eslint --fix ."
```
:::

After that, you can run ESLint on any file or directory like this:

```
npx eslint yourfile.js
```

```
yarn run eslint yourfile.js
```

:::info
This config extends the following plugins and parsers - 
- [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin) - 2.9.0
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) - 7.37.1
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) - 5.0.0
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) - 6.10.0
- [typescript-eslint](https://www.npmjs.com/package/typescript-eslint) - 8.10.0
:::
