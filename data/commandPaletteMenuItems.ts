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
      { icon: 'i-ri-home-2-line', name: 'Home', shortcut: ['⌘', 'H'] },
      { icon: 'i-ri-blogger-line', name: 'Blog', shortcut: ['⌘', 'B'] },
      { icon: 'i-material-symbols-account-circle-outline', name: 'About', shortcut: ['⌘', 'A'] },
    ],
  },
  {
    category: 'SOCIAL CONNECTION',
    items: [
      { icon: 'i-ri-github-line', name: 'Github', shortcut: ['⌘', 'G'] },
      { icon: 'i-ri-twitter-x-line', name: 'Twitter X', shortcut: ['⌘', 'X'] },
    ],
  },
])
