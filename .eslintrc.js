const eslintConfig = require('./lib');

module.exports = {
  ...eslintConfig,
  plugins: [
	'@stylistic/eslint-plugin'
  ],
};
