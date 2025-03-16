---
sidebar_position: 1
sidebar_label: eslint 8 to 9
description: Migration guide from v3 to v2 for this eslint-config.
---

# Migrate to eslint v9

To use eslint v9, make sure that the node version being used in your projection matches the criteria below as per [eslint v9 migration docs](https://eslint.org/docs/latest/use/migrate-to-9.0.0#drop-old-node).

- Node.js v18.18.0 and above
- Node.js v20.9.0 and above
- Node.js v21 and above

Uninstall `@nish1896/eslint-config`.

```sh
npm uninstall @nish1896/eslint-config
```
```sh
yarn remove @nish1896/eslint-config
```
```sh
pnpm remove @nish1896/eslint-config
```

Install `@nish1896/eslint-flat-config`.

```sh
npm i --save-dev @nish1896/eslint-flat-config
```
```sh
yarn add -D @nish1896/eslint-flat-config
```
```sh
pnpm add -D @nish1896/eslint-flat-config
```

Delete the `.eslintrc` or `.eslintrc.js` or `.eslintrc.json` file and create `eslint.config.mjs` file.

```sh
touch eslint.config.mjs
```

:::note
The `react` folder import from `@nish1896/eslint-config/react` has been renamed in this package and will be imported as `@nish1896/eslint-flat-config/jsx`.
:::

Add the following content to this file -

```js
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
