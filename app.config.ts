export default defineAppConfig({
  app: {
    header: {
      title: 'Dev Fanatic',
      showTitle: true,
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      darkModeToggle: true,
      nav: [
        {
          title: 'Docs',
          links: [
            {
              title: 'Getting Started',
              to: '/getting-started',
              description: 'Start building your document with shadcn-docs-nuxt',
            },
            {
              title: 'API',
              to: '/api',
              description: 'Discover the configurations and exposed APIs.',
              target: '_self',
            },
          ],
        },
        {
          title: 'Credits',
          links: [
            {
              title: 'shadcn-ui',
              to: 'https://ui.shadcn.com/',
              description: 'For the beautiful component design & docs design',
              target: '_blank',
            },
            {
              title: 'shadcn-vue',
              to: 'https://www.shadcn-vue.com/',
              description: 'For the vue port of shadcn-ui & some docs component source',
              target: '_blank',
            },
            {
              title: 'Docus',
              to: 'https://docus.dev/',
              description: 'For inspiration & some docs component source',
              target: '_blank',
            },
            {
              title: 'Nuxt Content',
              to: 'https://content.nuxt.com/',
              description: 'Content made easy for Vue Developers',
              target: '_blank',
            },
          ],
        },
        {
          title: 'Use This Template',
          to: '/getting-started/installation',
          target: '_self',
        },
      ],
    },
    hero: {
      hireInfo: [
        { text: 'For Hire', highlight: true },
        { text: 'Visit my', link: false },
        { text: 'contact', link: true, url: '/contact' },
        { text: 'page 💪', link: false },
      ],
      header: [
        { text: 'Looking to hire a developer', link: false },
        { text: 'for your', link: false },
        { text: 'web and mobile', highlight: true },
        { text: 'applications?', link: false },
      ],
      developerInfo: 'Full stack Developer',
      name: 'Don Puerto',
      description: 'Revolutionize your web and mobile projects with Vue, Ionic, Supabase, Adonis, and Laravel, ready to deliver excellence!',
      technologies: [
        { name: 'Vue', url: 'https://vuejs.org/', icon: 'logos:vue' },
        { name: 'Nuxt', url: 'https://nuxt.com/', icon: 'logos:nuxt-icon' },
        { name: 'Ionic', url: 'https://ionicframework.com/', icon: 'logos:ionic-icon' },
        { name: 'Supabase', url: 'https://supabase.com/', icon: 'logos:supabase-icon' },
        { name: 'Laravel', url: 'https://laravel.com/', icon: 'logos:laravel' },
        { name: 'Adonis', url: 'https://adonisjs.com/', icon: 'logos:adonisjs-icon' },
      ],
    },
    footer: {
      credits: '© 2024. All rights reserved.',
      links: [
        {
          title: 'Nuxt',
          icon: 'tabler:brand-nuxt',
          to: 'https://nuxt.com/',
          target: '_blank',
        },
        {
          title: 'Tailwind',
          icon: 'mdi:tailwind',
          to: 'https://tailwindcss.com/',
          target: '_blank',
        },
        {
          title: 'Radix-Vue',
          to: 'https://www.radix-vue.com/',
          target: '_blank',
        },
        {
          title: 'UI-thing',
          to: 'https://ui-thing.behonbaker.com/getting-started/introduction',
          target: '_blank',
        },
        {
          title: 'Github',
          icon: 'mdi:github',
          to: 'https://my-portfolio-blush-phi.vercel.app/',
          target: '_blank',
        },
      ],
    },
  },
  icon: {
    size: '24px', // default <Icon> size applied
    class: 'icon', // default <Icon> class applied
    aliases: {
      nuxt: 'logos:nuxt-icon',
    },
  },
})
