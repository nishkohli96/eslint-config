# @nish1896/eslint-config

![NPM Version](https://img.shields.io/npm/v/%40nish1896%2Feslint-config)
![NPM Downloads](https://img.shields.io/npm/dt/%40nish1896%2Feslint-config)
![NPM Downloads Per Month](https://img.shields.io/npm/dm/%40nish1896%2Feslint-config?color=%23e0e063)
![node-current](https://img.shields.io/node/v/%40nish1896%2Feslint-config?color=%23e86267)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/nishkohli96/eslint-config)

**A set of developer-friendly [eslint](https://eslint.org/), [stylistic](https://eslint.style/), [typescript](https://www.typescriptlang.org/) and [accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility) configuration rules to help you and fellow developers follow the industry-recommended coding practices for easier readability, maintenance and productivity !**

This package is compatible with eslint `8.57.1` or below. For usage with eslint `9.0.0` or above check [@nish1896/eslint-flat-config](https://www.npmjs.com/package/@nish1896/eslint-flat-config).

> ⚠️ Deprecated ESLint Version Detected
>
> You're currently using ESLint v8, which is deprecated. It is recommended to upgrade to ESLint v9 and [@nish1896/eslint-flat-config](https://www.npmjs.com/package/@nish1896/eslint-flat-config) for continued support and improvements.
>
> 👉 Follow the [migration guide](https://nish1896-eslint-config.vercel.app/migration/eslint-8_to_9) for a smooth and minimal-change upgrade process.

## Quick Setup

Copy the code snippet most relevant to your application and paste it in the `.eslintrc`, `.eslintrc.js` or `.eslintrc.json` file in your project root.

### Node.js

Use the `ts` module only if your code is written in **Typescript**.

```js
module.exports = {
  extends: [
    "@nish1896/eslint-config/js",
    "@nish1896/eslint-config/ts"
  ]
}
```
### React.js & Vite

Use the `ts` module only if your code is written in **Typescript**.

```js
module.exports = {
  extends: [
    "@nish1896/eslint-config/js",
    "@nish1896/eslint-config/ts",
    "@nish1896/eslint-config/jsx"
  ]
}
```
### Next.js

Update the existing `.eslintrc.json` file provided by [Next.js](https://nextjs.org/) app. Include the `next/typescript` and `next-ts` modules only if your code is written in **Typescript**.

```js
module.exports = {
  extends: [
    "next/core-web-vitals",
    "next/typescript",
    "@nish1896/eslint-config/js",
    "@nish1896/eslint-config/next-ts",
    "@nish1896/eslint-config/next"
  ]
}
```

For comprehensive details on installation, setup, rules, and usage, please refer the [Documentation](https://nish1896-eslint-config.vercel.app/introduction) 📖.

**If you are a React developer, I highly recommend checking out my package, [@nish1896/rhf-mui-components](https://www.npmjs.com/package/@nish1896/rhf-mui-components).**
