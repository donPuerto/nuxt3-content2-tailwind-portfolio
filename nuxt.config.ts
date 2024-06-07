// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    layoutTransition: { name: 'slide', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' },

  },
  css: ['~/assets/css/tailwind.css', '~/assets/scss/main.scss'],

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
    config: {
      stylistic: true,
    },
    checker: {
      lintOnStart: true,
      fix: true,
    },

  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  colorMode: {
    classSuffix: '',
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    storageKey: 'nuxt-color-mode', // key used to store the value in local storage

  },
  typescript: {
    typeCheck: true,
  },

})
