// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtConfig } from '@nuxt/schema'
import routeRules from './router.options'

export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: routeRules as NuxtConfig['routeRules'],
  app: {
    layoutTransition: { name: 'slide', mode: 'out-in' },
    pageTransition: { name: 'page-fade', mode: 'out-in' },
  },

  css: ['~/assets/css/transitions.css'],
  nitro: {
    experimental: {
      openAPI: true,
    },
    esbuild: {
      options: {
        target: 'esnext',
      },
    },

  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NODE_ENV === 'production'
        ? 'my-portfolio-blush-phi.vercel.app/'
        : 'http://localhost:3000',
    },
    gmailUserEmail: process.env.GMAIL_USER_EMAIL,
    gmailAppPass: process.env.GMAIL_APP_PASS,
  },

  postcss: {
    plugins: {
      tailwindcss: { exposeConfig: true },
      autoprefixer: {},
    },
  },

  components: ['~/components'],

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
    'nuxt-disqus',
    'nuxt-particles',
    '@vee-validate/nuxt',
    ['nuxt-mail', {
      message: {
        to: process.env.NUXT_MAILER_USER,
      },
      smtp: {
        service: process.env.NUXT_MAILER_SERVICE,
        host: process.env.NUXT_MAILER_HOST,
        port: process.env.NUXT_MAILER_PORT,
        secure: false,
        auth: {
          user: process.env.NUXT_MAILER_USER,
          pass: process.env.NUXT_MAILER_PASSWORD,
        },
      },
    }],
  ],
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },

  disqus: {
    shortname: 'donpuerto-dev',

  },

  fonts: {
    families: [{
      name: 'Inter',
      // Use the 'weights' property instead of 'wght'
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      // You can specify styles if needed
      styles: ['normal', 'italic'],
    }],
    // This ensures the font is loaded globally regardless of usage in the project
    defaults: {
      preload: true,
    },
  },

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
        allowImportingTsExtensions: true,
      },
    },
  },

  plugins: [

  ],

  content: {
    experimental: {
      search: {
        indexed: true,
      },
    },
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
        sepia: 'monokai',
      },
      preload: [
        'json',
        'js',
        'ts',
        'html',
        'css',
        'vue',
        'shell',
        'markdown',
        'yaml',
        'bash',
        'python',
      ],
      langs: [
        'json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'mdc', 'md', 'yaml',
      ],

    },
    markdown: {
      mdc: true,
    },
  },

  compatibilityDate: '2024-07-22',
})
