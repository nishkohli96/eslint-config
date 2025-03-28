---
sidebar_position: 1
sidebar_label: v2 to v3
description: Migration guide from v2 to v3 for @nish1896/eslint-config.
---

# Migration from v2 to v3

[Stylistic ESLint](https://eslint.style/guide/migration) which forms the core of this package,  no longer supports legacy configurations starting from **v4+**. Additionally, ESLint **v8.57.1 and below are now deprecated**, making it unlikely for this package to receive further major updates.

<h3>🚨 **Recommended Action: Upgrade to ESLint v9**</h3>

To ensure compatibility, continued updates, and improved linting performance, it is strongly advised to upgrade your project to ESLint v9.

For migration steps, refer to: [ESLint v9 Migration Guide](../eslint-8_to_9.md).


## What's Changed ?

Similar to the [flat-config](https://www.npmjs.com/package/@nish1896/eslint-flat-config), this package has been modularized into independent components, allowing developers to apply framework-specific rules based on their project setup.

- `js`: [Eslint](https://eslint.org/docs/latest/rules/) and [stylistic](https://eslint.style/packages/js) rules for javascript
- `ts`: TypeScript-specific rules, including [stylistic](https://eslint.style/packages/ts) and [typescript-eslint](https://typescript-eslint.io/rules/)
- `jsx`: Rules for [React](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules), [React Hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks), [JSX A11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main?tab=readme-ov-file#supported-rules), and [stylistic JSX](https://eslint.style/packages/jsx)
- `next`:  JSX rules designed for use alongside the `eslint-plugin-next` package 
- `next-ts`: [Typescript-eslint](https://typescript-eslint.io/rules/) and [Stylistic-ts](https://eslint.style/packages/ts) rules tailored for [Next.js](https://nextjs.org/) apps.

## Code Change

The `react` module import from v2 has been renamed to `jsx`, while the typescript rules from `next` module have been consolidated under the `next-ts` module.


### Node.js

If you are using **typescript** in your project, add the `ts` module from this package.

```diff
{
  "extends": [
    "@nish1896/eslint-config/js",
+   "@nish1896/eslint-config/ts"
  ]
}
```

### React & Vite

Add the `ts` module from this package, if your application uses **typescript**.

```diff
{
  "extends": [
    "@nish1896/eslint-config/js",
+   "@nish1896/eslint-config/ts"
-   "@nish1896/eslint-config/react"
+   "@nish1896/eslint-config/jsx"
  ]
}
```

## Next.js

Add the `next-ts` module from this package, if your application uses **typescript**.

```diff
module.exports = {
  extends: [
    "@nish1896/eslint-config/js",
+   "@nish1896/eslint-config/next-ts",
    "@nish1896/eslint-config/next"
  ]
}
```
