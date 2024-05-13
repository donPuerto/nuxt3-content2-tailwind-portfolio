// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/devtools', '@nuxt/eslint'],
  eslint: {
    // options here
    config: {
      stylistic: true,
    },
  },
  typescript: {
    typeCheck: true,
  },

})
