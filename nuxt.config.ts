// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	app: {
		layoutTransition: { name: 'slide', mode: 'out-in' },
		pageTransition: { name: 'page', mode: 'out-in' },

	},
	css: ['~/assets/styles/main.scss'],

	components: [{ path: '~/components', pathPrefix: false }],
	modules: [
		'@nuxt/devtools',
		'@nuxt/eslint',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/color-mode',
		'@pinia/nuxt',
		'@nuxt/fonts',
	],
	eslint: {
		// options here
		config: {
			stylistic: {
				indent: 'tab',
				quotes: 'single',
				semi: true,
			},
		},

	},
	pinia: {
		storesDirs: ['./stores/**', './custom-folder/stores/**'],
	},
	typescript: {
		typeCheck: true,
	},

});
