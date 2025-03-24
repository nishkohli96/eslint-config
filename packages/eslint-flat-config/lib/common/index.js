export const commonConfig = Object.freeze({
	ignoreDirsFiles: [
		/* Eslint config files */
		'eslint.config.js',
		'eslint.config.mjs',

		/* Other config files */
		'*.config.{js,ts}',
    /* node_modules and build folders */
		'node_modules',
		'.next',
		'.turbo',
		'build',
		'dist',
		'coverage',
		'storybook-static'
	]
});

