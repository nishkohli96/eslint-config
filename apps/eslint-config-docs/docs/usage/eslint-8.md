---
sidebar_position: 1
sidebar_label: Eslint 8
description: Import and use this configuration with eslint version 8.
title: Usage with eslint 8
---

:::note
If you are using eslint version ***8.57 or below***, use [@nish1896/eslint-config](https://www.npmjs.com/package/@nish1896/eslint-config) package.
:::

To set up ESLint, create a `.eslintrc`, `.eslintrc.js` or `.eslintrc.json` file in your project root. Use this file to specify the configuration for your application by referring to the relevant section of this guide.

```sh
touch .eslintrc.js
```

### NodeJS

For NodeJS applications, use only the `js` configuration this package. This import is essential for all JavaScript-based projects, as it defines the recommended set of JavaScript-specific linting rules and ensures consistent code quality.

```js
module.exports = {
  extends: [
    "@nish1896/eslint-config/js"
  ],
  rules: {}
}
```

### React & Vite

The `react` import of this package contains the relevant rules for linting jsx code.

```js
module.exports = {
  extends: [
    "@nish1896/eslint-config/js",
    "@nish1896/eslint-config/react"
  ],
  rules: {}
}
```

### NextJS

The existing `react` import caused conflicts with the [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) plugin, which prevented linting to execute. From version **2.1.0** onwards, a separate `next` import has been introduced to address these conflicts, since NextJS also provides its own set of eslint configuration.

If you are using this configuration in a NextJS Application, it is highly recommended to upgrade to version `2.1.0` or above.

```js
module.exports = {
  extends: [
    "@nish1896/eslint-config/js",
    "@nish1896/eslint-config/next"
  ],
  rules: {}
}
```
