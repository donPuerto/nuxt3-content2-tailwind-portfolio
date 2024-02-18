// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  ssr: true,

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL,
    name: 'Don Puerto Portfolio',
    description: 'Don Puerto | My Website Portfolio | Fullstack Developer',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
    indexable: true
  },
  sitemap: {
    strictNuxtContentPaths: true
  },

  image: {
    quality: 90,
    format: ['webp']
  },

  // ui: {
  //   global: true,
  //   icons: ['material-symbols', 'mdi', 'ri', 'ph']
  // },

  css: [],
  typescript: {
    strict: true
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/devtools', '@nuxtjs/seo', '@nuxt/image']
  // content: {
  //   // ... options
  //   highlight: {
  //     theme: 'github-dark',
  //     // Define languages you expect to use
  //     preload: ['java', 'javascript']
  //   },
  //   markdown: {
  //     // Configuring external link processing
  //     // https://github.com/rehypejs/rehype-external-links
  //     rehypePlugins: [
  //       [
  //         'rehype-external-links',
  //         {
  //           target: '_blank',
  //           rel: 'noopener noreferer'
  //         }
  //       ]
  //     ]
  //   }
  // }
})
