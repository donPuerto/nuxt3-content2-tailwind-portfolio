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
      { icon: 'i-line-md-home', name: 'Home', shortcut: ['⌘', 'H'] },
      { icon: 'i-line-md-document-twotone', name: 'Blog', shortcut: ['⌘', 'B'] },
      { icon: 'i-line-md-person', name: 'About', shortcut: ['⌘', 'A'] },
    ],
  },
  {
    category: 'SOCIAL CONNECTION',
    items: [
      { icon: 'i-line-md-github', name: 'Github', shortcut: ['⌘', 'G'] },
      { icon: 'i-line-md-twitter-x', name: 'Twitter X', shortcut: ['⌘', 'X'] },
    ],
  },
])
