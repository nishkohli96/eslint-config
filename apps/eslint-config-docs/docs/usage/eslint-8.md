---
sidebar_position: 1
sidebar_label: Eslint 8
description: Import and use this configuration with eslint version 8.
title: Usage with eslint 8
---

:::note
ESLint version 8 is now deprecated, and upgrading to version 9 is recommended. Refer the [migration guide](../migration/eslint-8_to_9.md) to update eslint in your project with minimal changes.

This package will continue to receive minor updates for the time being.
:::

To set up ESLint, create a `.eslintrc`, `.eslintrc.js` or `.eslintrc.json` file in your project root. Use this file to specify the configuration for your application by referring to the relevant section of this guide.

```bash
touch .eslintrc.js
```

### Node.js

For Node.js applications, use only the `js` configuration this package. This import is essential for all JavaScript-based projects, as it defines the recommended set of JavaScript-specific linting rules and ensures consistent code quality.

:::note
If you are using **Typescript** in your project, do include the `ts` module in your config file.
:::

```js title=".eslintrc.js"
module.exports = {
  extends: [
    "@nish1896/eslint-config/js",
    "@nish1896/eslint-config/ts"
  ],
  rules: {}
}
```

### React & Vite

The `react` import of this package contains the relevant rules for linting jsx code.

```js title=".eslintrc.js"
module.exports = {
  extends: [
    "@nish1896/eslint-config/js",
    "@nish1896/eslint-config/ts",
    "@nish1896/eslint-config/jsx"
  ],
  rules: {}
}
```

### NextJS

The existing `react` import caused conflicts with the [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) plugin, which prevented linting to execute.

From version **2.1.0** onwards, a separate `next` import has been introduced to address these conflicts, since NextJS also provides its own set of eslint configuration.

```js title=".eslintrc.js"
module.exports = {
  extends: [
    "@nish1896/eslint-config/js",
    "@nish1896/eslint-config/next-ts",
    "@nish1896/eslint-config/next"
  ],
  rules: {}
}
```
