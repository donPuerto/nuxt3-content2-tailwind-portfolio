// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['primevue/resources/themes/lara-dark-indigo/theme.css', 'primeicons/primeicons.css', 'primeflex/primeflex.css'],
  build: {
    transpile: ['primevue']
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxt/devtools', '@formkit/auto-animate/nuxt'],
  content: {
    // ... options
    highlight: {
      theme: 'github-dark',
      // Define languages you expect to use
      preload: ['java', 'javascript']
    },
    markdown: {
      // Configuring external link processing
      // https://github.com/rehypejs/rehype-external-links
      rehypePlugins: [
        [
          'rehype-external-links',
          {
            target: '_blank',
            rel: 'noopener noreferer'
          }
        ]
      ]
    }
  }
})
