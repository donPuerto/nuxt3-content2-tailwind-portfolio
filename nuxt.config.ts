// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
	},
	css: ['~/assets/scss/globals.scss'],
	modules: ['@nuxt/devtools', '@nuxt/eslint', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@pinia/nuxt'],
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
