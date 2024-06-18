// data/menuItems.ts
import type { Ref } from 'vue'
import { ref } from 'vue'

export interface MenuItem {
  category: string
  items: { icon: string, name: string, shortcut: string[] }[]
}

export const menuItems: Ref<MenuItem[]> = ref([
  {
    category: 'NAVIGATION',
    items: [
      { icon: 'line-md:home-md', name: 'Home', shortcut: ['⌘', 'H'] },
      { icon: 'line-md:document-list-twotone', name: 'Blog', shortcut: ['⌘', 'B'] },
      { icon: 'line-md:person', name: 'About', shortcut: ['⌘', 'A'] },
    ],
  },
  {
    category: 'SOCIAL CONNECTION',
    items: [
      { icon: 'line-md:github-loop', name: 'Github', shortcut: ['⌘', 'G'] },
      { icon: 'line-md:twitter-x-alt', name: 'Twitter X', shortcut: ['⌘', 'X'] },
    ],
  },
])
