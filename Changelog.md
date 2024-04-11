# **What's changed?**

## [2.0.2](https://github.com/nishkohli96/eslint-config/tree/v2.0.2)

**Released - 12 Apr, 2024**

Modify [space-before-blocks](https://eslint.style/rules/default/space-before-blocks) and [comma-dangle](https://eslint.style/rules/default/comma-dangle) config.

Set keyword spacing to `keywords: 'always'`. Previous config was resulting in no spacing something like,

```
if(){}
catch{ 
```
Remove comma dangle from arrays and objects, as traling commas were creating unnecessary noise esp in sequelize queries.


## [2.0.1](https://github.com/nishkohli96/eslint-config/tree/v2.0.1)

**Released - 11 Apr, 2024**

- Add the following rules in `js` config
  - [@typescript-eslint/no-explicit-any](https://typescript-eslint.io/rules/no-explicit-any/)
  - [array-element-newline](https://eslint.style/rules/default/array-element-newline)
  - [newline-per-chained-call](https://eslint.style/rules/default/newline-per-chained-call)
  - [space-before-blocks](https://eslint.style/rules/default/space-before-blocks)
<<<<<<< HEAD
  - [space-infix-ops](https://eslint.style/rules/default/space-infix-ops)
=======
  - [space-infix-ops](https://eslint.style/rules/default/sace-infix-ops)
>>>>>>> origin/main
- Modify [comma-dangle](https://eslint.style/rules/default/comma-dangle) config.

## [2.0.0](https://github.com/nishkohli96/eslint-config/tree/v2.0.0)

**Released - 10 Apr, 2024**

- Split `js` and `react-jsx` rules
- Turn off [@typescript-eslint/ban-ts-comment](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-ts-comment.mdx)
- Upgraded `@stylistic/eslint-plugin`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser` and `eslint-plugin-react` dependencies. 

## [1.0.4](https://github.com/nishkohli96/eslint-config/tree/v1.0.4)

**Released - 12 Feb, 2024**

- Upgraded `@stylistic/eslint-plugin`, `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser` dependencies. 
- Removed `es2024` key from `env`. 
- Turn off [no-mixed-spaces-and-tabs](https://eslint.style/rules/default/no-mixed-spaces-and-tabs) rule.

## [1.0.3](https://github.com/nishkohli96/eslint-config/tree/v1.0.3) 

**Released - 31 Jan, 2024**

"*More developer friendly, Yay*! 😃"

Approx 90% of the rules used now `warn` instead of throwing an error, so you can focus more on writing the logic, and not on formatting the code! Only the rules that throw an `error` and some exceptional `warn` rules like `'no-debugger'` must be fixed by the developer.

Also, added some cool new badges in [README.md](/README.md) thanks to [Shields.io](https://shields.io/) !

## [1.0.2](https://github.com/nishkohli96/eslint-config/tree/v1.0.2) 

**Released - 28 Jan, 2024**

While using this package during my development, I felt that the status of the rules listed below needed to be changed from `error` to `warn` as they would cause my app to crash, prompting me to alter my code to keep eslint happy (and make me irritated instead 😡). These rules would automatically fix the code on running the `yarn lint` script. 

These rules are listed below - 

| Rule Name |
|-| 
|[comma-dangle](https://eslint.style/rules/default/comma-dangle)| 
|[ban-ts-comment](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-ts-comment.md)|
|[eol-last](https://eslint.style/rules/default/eol-last)| 
|[jsx-one-expression-per-line](https://eslint.style/rules/default/jsx-one-expression-per-line)|

The below rule is removed from the config file.

| Rule Name | Reason |
|-|-|
|[multiline-comment-style](https://eslint.org/docs/latest/rules/multiline-comment-style)|the default setting `starred-block` read commented code as a comment itself, which made it difficult to uncomment the code|