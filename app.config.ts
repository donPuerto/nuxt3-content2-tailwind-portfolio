export default defineAppConfig({
  app: {
    shareLinks: [
      {
        name: 'X (Twitter)',
        icon: 'ri:twitter-x-fill',
        url: 'https://twitter.com/intent/tweet?url=',
      },
      {
        name: 'LinkedIn',
        icon: 'mdi:linkedin',
        url: 'https://www.linkedin.com/sharing/share-offsite/?url=',
      },
      {
        name: 'Facebook',
        icon: 'mdi:facebook',
        url: 'https://www.facebook.com/sharer/sharer.php?u=',
      },
    ],
  },
  quickLinks: [
    { icon: 'ph:pen-duotone', text: 'Edit this article', url: 'https://github.com/donPuerto/nuxt3-content2-tailwind-portfolio/blob/master/content/blog/2.nuxt/1.nuxt.md' },
    { icon: 'ph:shooting-star-duotone', text: 'Star on Github', url: 'https://github.com/donPuerto' },
    { icon: 'ph:chat-centered-text-duotone', text: 'Chat on Discord', url: 'https://discord.gg/6eGKS3En' },
    { icon: 'ph:hand-heart-duotone', text: 'Become Sponsor', url: 'https://github.com/sponsors/donPuerto' },
  ],
});
