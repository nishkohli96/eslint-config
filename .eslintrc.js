const eslintConfig = require('./lib');

module.exports = { 
	...eslintConfig,
	plugins: [
		'@typescript-eslint', 
		'@stylistic/eslint-plugin'
	],
};