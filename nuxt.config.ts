// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { 
    enabled: true,
    componentInspector: false,
  },
  app: {
    pageTransition: { name: 'page-fade', mode: 'out-in' },
  },
  nitro: {
    preset: 'node-server',
  },
  routeRules: {
    '/': { ssr: false },
    '/contact/**': { static: true },
    '/blog/**': { static: true },
    '/projects/**': { ssr: false },
  },

  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/transitions.css', 
    '~/assets/css/glow-effects.css',
  ],
  
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
      baseURL: '/',
    },
    gmailUserEmail: process.env.GMAIL_USER_EMAIL,
    gmailAppPass: process.env.GMAIL_APP_PASS,
  },
  components: ['~/components'],
  modules: [
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    'radix-vue/nuxt',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    'nuxt-disqus',
    '@vee-validate/nuxt',
    '@nuxt/content',
    'nuxt-particles',
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
  icon: {
    serverBundle: {
      collections: [
        'heroicons', 
        'lucide', 
        'mdi', 
        'line-md', 
        'uil', 
        'ri',
        'ic', 
        'material-symbols',
        'logos',
        'icon-park-outline',
      ], 
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
  eslint: {
    // config: {
    //   stylistic: {
    //     semi: false,
    //     quotes: 'single',
    //     indent: 2,
    //   },
    // },
    checker: {
      lintOnStart: true,
      fix: true,
    },
  },
  fonts: {
    defaults: {
      preload: true,
    },
  },

  colorMode: {
    preference: 'system',
    fallback: 'light',
    classPrefix: '',
    classSuffix:'-mode',
    storageKey: 'nuxt-color-mode',
  },

  pinia: {
    storesDirs: ['./stores/**'],
  },

  disqus: {
    shortname: 'donpuerto-dev',
  },

  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },

  tailwindcss: {
    configPath: '~/tailwind.config.ts',
    exposeConfig: true,
    viewer: false,
    // Remove the deprecated 'injectPosition' from here if it exists
  },

  imports: {
    imports: [
      {
        from: 'tailwind-variants',
        name: 'tv',
      },
      {
        from: 'tailwind-variants',
        name: 'VariantProps',
        type: true,
      },
    ],
  },

  postcss: {
    plugins: {
      tailwindcss: { exposeConfig: true },
      autoprefixer: {},
    },
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        allowSyntheticDefaultImports: true,
        allowImportingTsExtensions: true,
      },
    },
  },

  vite: {
    server: {
      fs: {
        strict: false,
      },
    },
  },

});
