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
  css: ['~/assets/css/transitions.css'],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NODE_ENV === 'production'
        ? process.env.PROD_URL
        : process.env.DEV_URL,
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
    editorSupport: true,
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'last' }],
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

});
