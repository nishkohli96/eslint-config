---
sidebar_position: 2
sidebar_label: Why Eslint?
description: What is eslint and why you should include it in your projects?
---

# Why should I use eslint in my projects ?

As per the official [eslint](https://eslint.org/) docs, 

> ESLint statically analyzes your code to quickly find problems.

Besides error catching, eslint rules are also capable of formatting your code which makes it feel consistent, especially when working with a large team. One such popular framework for formatting the code is [prettier](https://prettier.io/).

However, in this config, we will be mainly using [eslint-stylistic](https://eslint.style/) over [prettier](https://prettier.io/) as it gives you additional options to format your code and hopefully avoid conflict of rules between `eslint` and `prettier` for which you additionally had to install [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier). I personally use `prettier` only to format non `.js(x)` and `.ts(x)` files like .html and .css.  

On running `eslint .` some of the rules imported from this config will give you a warning ⚠️ indicating that the code issue may be ignored while the rules triggering an error ❌ will discourage you to avoid that coding practice. `eslint --fix .` should hopefully fix most of the warnings or errors in your code. It's okay to have a few warnings when developing, but they should be taken care of when pushing your code for production. 

:::warning
Ignored eslint warnings or errors in code will likely cause your app build to fail, unless resolved or specified eslint to ignore using the `eslint-ignore` syntax.
:::

This config extends the following plugins and parsers - 
- [eslint/recommended](https://www.npmjs.com/package/eslint) - 8.56.0
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) - 7.34.1
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) - 4.6.0
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) - 6.8.0
- [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin) - 1.7.0
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) - 7.8.0
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) - 7.6.0