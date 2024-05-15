// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
	// ...Custom flat configs append after nuxt's configs
	{
		files: ['**/*.ts', '**/*.tsx'],
		rules: {
			'no-trailing-spaces': ['warn'],
			'prefer-promise-reject-errors': 'off',
			'vue/no-v-html': 'off',
			'vue/multi-word-component-names': ['error', {
				ignores: ['error', 'Error'],
			}],

		},

	},
);
