// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    layoutTransition: { name: 'slide', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  // css: ['~/assets/scss/main.scss'],
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  postcss: {
    plugins: {
      tailwindcss: { exposeConfig: true },
      autoprefixer: {},
    },
  },

  components: [{ path: '~/components', pathPrefix: false }],

  modules: [
    '@nuxt/devtools',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    'radix-vue/nuxt',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@nuxt/fonts',
    'nuxt-icon',
    '@nuxt/content',
    '@nuxt/image',
    '@vueuse/nuxt',
  ],

  // Defaults options
  tailwindcss: {
    exposeConfig: true,
    editorSupport: true,
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'last' }],
  },
  imports: {
    // Add tv and VariantProps to the set of auto imported modules
    imports: [
      { from: 'tailwind-variants', name: 'tv' },
      { from: 'tailwind-variants', name: 'VariantProps', type: true },
      { from: 'vue-sonner', name: 'toast', as: 'useSonner' },
    ],
  },

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
    preference: 'system',
    fallback: 'light',
    storageKey: 'nuxt-color-mode',
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        // baseUrl: '.',
        allowSyntheticDefaultImports: true,
      },
    },
  },

  plugins: [{ src: '~/plugins/particles.client.ts', mode: 'client' }],

  content: {
    highlight: {
      theme: {
        default: 'material-theme-palenight',
        dark: 'one-dark-pro',
        sepia: 'monokai',
      },
      preload: [
        'json',
        'js',
        'ts',
        'css',
        'html',
        'md',
        'yaml',
        'vue',
        'vue-html',
        'bash',
        'typescript',
        'javascript',
      ],
    },
  },

})
