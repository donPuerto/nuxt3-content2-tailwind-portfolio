export default defineAppConfig({
  shadcnDocs: {
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
  },
  icon: {
    size: '24px', // default <Icon> size applied
    class: 'icon', // default <Icon> class applied
    aliases: {
      nuxt: 'logos:nuxt-icon',
    },
  },
})
