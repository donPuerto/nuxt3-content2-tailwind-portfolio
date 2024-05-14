// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: ['~/assets/scss/globals.scss'],
  modules: ['@nuxt/devtools', '@nuxt/eslint', '@nuxtjs/tailwindcss','@nuxtjs/color-mode'],
  eslint: {
    // options here
    config: {
      stylistic: {
        indent: 'tab',
        quotes: 'single',
        semi: true,
      },
    }
    
  },

  typescript: {
    typeCheck: true,
  },

})
