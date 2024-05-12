---
sidebar_position: 7
sidebar_label: Migration from v1
description: Migration guide from v1 to v2 for this eslint-config.
---

# Migration Guide

To use eslint v9, make sure that the node version being used in your projection matches the criteria below as per [eslint v9 migration docs](https://eslint.org/docs/latest/use/migrate-to-9.0.0#drop-old-node).

- Node.js v18.18.0 and above
- Node.js v20.9.0 and above
- Node.js v21 and above

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