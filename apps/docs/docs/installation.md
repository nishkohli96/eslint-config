---
sidebar_position: 3
sidebar_label: Installation
description: How to install this package using npm or yarn?
---

# Installation

In case you are upgrading to eslint **v9 or above** , please check the [migration guide](./migration/v2_to_v1).

In case you are migrating from `v1.0.x`, please check the [migration guide](./migration/v2_to_v1).

You'll first need to install [ESLint](https://eslint.org/). If you project is a monorepo, consider creating a separate eslint-config for each package.

Please do refer the official docs to [install eslint](https://eslint.org/docs/latest/use/getting-started).

```
npm i eslint --save-dev
```
```
yarn add -D eslint
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

**You may also choose to install other eslint plugins or configurations depending upon your application needs.** 

- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-json](https://www.npmjs.com/package/eslint-plugin-json)
- [eslint-plugin-jsonc](https://www.npmjs.com/package/eslint-plugin-jsonc)
- [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node)
- [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)