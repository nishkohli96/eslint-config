---
sidebar_position: 4
sidebar_label: Usage
description: How to import and use this package in your eslint config file?
title: Usage
---

# Usage

<!-- In case you are migrating from v1.0.x, check the [Migration Guide](./migration/). -->

- If you are using eslint version ***8.57 or below***, use [@nish1896/eslint-config](https://www.npmjs.com/package/@nish1896/eslint-config). 
- For eslint version ***9 and above***, use [@nish1896/eslint-flat-config](https://www.npmjs.com/package/@nish1896/eslint-flat-config).

### NodeJS App

Both `@nish1896/eslint-flat-config` and `@nish1896/eslint-config` contain the same set of rules. For NodeJS applications, use only the `js` configuration from either package, ie. `@nish1896/eslint-config/js` and `@nish1896/eslint-flat-config/js`.

This import is essential for all JavaScript-based projects, as it defines the recommended set of JavaScript-specific linting rules and ensures consistent code quality.

### React & Vite Apps

If you are using eslint v9 or above, create `eslint.config.mjs` file in your root directory and paste the below code - 

```js
import jsEslintConfig from '@nish1896/eslint-flat-config/js';
import jsxEslintConfig from '@nish1896/eslint-flat-config/jsx';

export default [
  ...jsEslintConfig,
  ...jsxEslintConfig,
  {
    rules: {}
  }
];
```

For eslint `8.57.0` or below, create `.eslintrc.js` or `.eslintrc.json` file in your root directory and paste the below code - 

```js
module.exports = {
  extends: [
    "@nish1896/eslint-config/js",
    "@nish1896/eslint-config/react"
  ],
  rules: {}
}
```

### NextJS App

As of October 2024, the [create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app) CLI generates a [NextJS](https://nextjs.org/) application using ESLint version 8. Therefore, for this application, you need to use the `@nish1896/eslint-config` package.

The `@nish1896/eslint-flat-config` package will be updated in the future, once the Next.js scaffolding process adopts ESLint 9.

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

### Examples

Example applications that utilize the `eslint` and `eslint-flat-config` can be viewed [here](https://github.com/nishkohli96/eslint-config/tree/main/examples).

### Modify Configuration

To add a new rule, turn off or modify the existing list of rules, append the `rules` in your _eslint configuration file_.

```js
{
  rules: {
    "<new-rule>": "error",
    "no-unused-vars": "off",
    "id-length": ["warn", { min: 3, max: 20 }]
  }
}
```

To disable one or more rules throughout the file, add this at the top of your file.

```
/* eslint-disable  @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any */
```

To disable one or more rules in the next line,

```
/* eslint-disable-next-line <rule1>, <rule2> */
```

:::warning
The syntax below won't work

```
// eslint-disable-next-line <rule1>, <rule2>
/** eslint-disable-next-line  @typescript-eslint/no-unused-vars */
```

:::

To run linting on your codebase,

```sh
npm run lint
```

```
yarn lint
```

For formatting non-js like `.css`, `.html` files you can use prettier alongside eslint. Prettier configuration, `.prettierignore` and usage of eslint with prettier in `pre-commit` hook can be referenced from my [react-node-ts-monorepo](https://github.com/nishkohli96/react-node-ts-monorepo/blob/main/package.json).
