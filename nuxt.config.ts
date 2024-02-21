// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  ssr: true,

  app: {
    head: {},
    pageTransition: { name: "page", mode: "out-in" },
  },

  // site: {
  //   url: process.env.NUXT_PUBLIC_SITE_URL,
  //   name: 'Don Puerto Portfolio',
  //   description: 'Don Puerto | My Website Portfolio | Fullstack Developer',
  //   defaultLocale: 'en',
  //   identity: { type: 'Person' },
  //   indexable: true,
  // },
  // sitemap: {
  //   strictNuxtContentPaths: true,
  // },

  image: {
    // Options
    quality: 90,
    format: ["webp"],
  },

  ui: {
    icons: [],
  },

  colorMode: {
    preference: "dark",
    fallback: "dark",
  },
  content: {
    markdown: {
      anchorLinks: false,
    },
    highlight: {
      theme: "github-dark",
    },
  },
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxt/image"],
  components: [
    { path: "~/components/global", pathPrefix: false },
    { path: "~/components/core", pathPrefix: false },
    "~/components",
  ],
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
});
