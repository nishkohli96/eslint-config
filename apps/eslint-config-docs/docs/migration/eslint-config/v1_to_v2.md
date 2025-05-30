---
sidebar_position: 2
sidebar_label: v1 to v2
description: Migration guide from v1 to v2 for @nish1896/eslint-config.
---

# Migration from v1 to v2

**Starting v2 onwards, the linting rules for javascript and react have been split to purge out any unnecessary rules when using this config in a standalone nodejs application.** 

For usage in a nodejs application, use only the `js` eslint configuration of this package. 

```diff
module.exports = {
- extends: ['@nish1896']
+ extends: ['@nish1896/eslint-config/js']
}
```

React applications would need both the `js` and `react` config import of this package.

```diff
module.exports = {
- extends: ['@nish1896']
+ extends: ['@nish1896/eslint-config/js', '@nish1896/eslint-config/react']
}
```

From version **2.1.0** onwards, a separate `next` module is also available for usage in [Next.js](https://nextjs.org/) applications.

```diff
module.exports = {
  extends: [
-   '@nish1896'
+   '@nish1896/eslint-config/js',
+   '@nish1896/eslint-config/next'
  ]
}
```
