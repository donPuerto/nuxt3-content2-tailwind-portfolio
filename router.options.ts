import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
  routes: _routes => [
    {
      name: 'blog-slug',
      path: '/blog/:slug(.*)*',
      component: () => import('@/pages/blog/[...slug].vue'),
    },
  ],
}
