# **What's changed?**

## 1.0.3 

**Released - 31 Jan, 2024**

"*More developer friendly, Yay*! 😊"

`[n-1]` stylistic rules used now `warn` instead of throwing an error, so you can focus more on writing the logic, and not on formatting the code!

### Rules Removed

| Rule Name | Reason |
|-|-|
|[@stylistic/lines-around-comment](https://eslint.style/rules/default/lines-around-comment)| Sometimes reqd, when writing block comments above functions, but don't need when writing block comment between 2 lines of code |



## 1.0.2 

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