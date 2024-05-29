---
sidebar_position: 3
sidebar_label: Installation
description: How to install this package using npm or yarn?
---

# Installation

In case you are upgrading to eslint **v9 or above** , please check the [migration guide](./migration/v3_to_v2).

If you are using eslint v8 and are migrating from `v1.0.x`, please check the [migration guide](./migration/v2_to_v1).

You'll first need to install [ESLint](https://eslint.org/). If you project is a monorepo, consider creating a separate eslint-config for each package.

Please do refer the official docs to [install eslint](https://eslint.org/docs/latest/use/getting-started) if needed.

### Eslint 9 and above

```
npm i eslint --save-dev
```
```
yarn add -D eslint
```

Next, install `@nish1896/eslint-flat-config`.

```
npm install @nish1896/eslint-flat-config  --save-dev
```
```
yarn add -D @nish1896/eslint-flat-config
```

### Eslint 8

We will be installing **v8.56.0** which was the last major version for eslint, before version 9 was released.

```
npm i eslint@8.56.0 --save-dev
```
```
yarn add -D eslint@8.56.0
```

Next, install `@nish1896/eslint-config`.

```
npm install @nish1896/eslint-config  --save-dev
```
```
yarn add -D @nish1896/eslint-config
```


Add *"lint"* command to your `package.json` file.

```
npm pkg set scripts.lint="eslint --fix ."
```

After that, you can run ESLint on any file or directory like this:

```
npx eslint yourfile.js
```

```
yarn run eslint yourfile.js
```
:::info
This config extends the following plugins and parsers - 
- [eslint/recommended](https://www.npmjs.com/package/eslint) - 9.2.0 & 8.56.0
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) - 7.34.1
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) - 4.6.0
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) - 6.8.0
- [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin) - 2.1.0 & 1.7.0
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) - 7.9.0
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) - 7.9.0
:::

**You may also choose to install other eslint plugins or configurations depending upon your application needs.** 

- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-json](https://www.npmjs.com/package/eslint-plugin-json)
- [eslint-plugin-jsonc](https://www.npmjs.com/package/eslint-plugin-jsonc)
- [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node)
- [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)