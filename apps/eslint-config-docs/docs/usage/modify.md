---
sidebar_position: 3
sidebar_label: Modification
description: Disable or ammend existing rules of the configuration file.
title: Modification or disabling of rules defined in the configuration file.
---

# Modify Rules

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
```sh
yarn lint
```
```sh
pnpm lint
```

For formatting non-js like `.css`, `.html` files you can use prettier alongside eslint. Prettier configuration, `.prettierignore` and usage of eslint with prettier in `pre-commit` hook can be referenced from my [react-node-ts-monorepo](https://github.com/nishkohli96/react-node-ts-monorepo/blob/main/package.json).
