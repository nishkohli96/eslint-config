---
sidebar_position: 7
sidebar_label: Migration from v1
description: Migration guide from v1 to v2 for this eslint-config.
---

# Migration Guide

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