// data/menuItems.ts
import { ref } from 'vue'
import type { Ref } from 'vue'

export interface MenuItem {
  category: string
  items: { icon: string, name: string, shortcut: string[], route: string }[]
}

export const menuItems: Ref<MenuItem[]> = ref([
  {
    category: 'NAVIGATION',
    items: [
      { icon: 'line-md:home-md', name: 'Home', shortcut: ['⌘', 'H'], route: '/' },
      { icon: 'line-md:document-list-twotone', name: 'Blog', shortcut: ['⌘', 'B'], route: '/blog' },
      { icon: 'line-md:person', name: 'About', shortcut: ['⌘', 'A'], route: '/about' },
    ],
  },
  {
    category: 'SOCIAL CONNECTION',
    items: [
      {
        icon: 'line-md:github-loop',
        name: 'Github',
        shortcut: ['⌘', 'G'],
        route: 'https://github.com',
      },
      {
        icon: 'line-md:twitter-x-alt',
        name: 'Twitter X',
        shortcut: ['⌘', 'X'],
        route: 'https://twitter.com',
      },
    ],
  },
])
