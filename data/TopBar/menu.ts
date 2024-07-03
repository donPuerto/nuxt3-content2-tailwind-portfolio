import type { MenuList } from '~/types/components/header/menu'

export const menuList: MenuList[] = [
  {
    header: 'Pages',
    items: [
      { name: 'Home', route: '/', icon: 'ri:home-2-line', shortcut: 'H' },
      { name: 'Blog', route: '/blog', icon: 'uil:notes', shortcut: 'B' },
      { name: 'Projects', route: '/projects', icon: 'ic:outline-work-outline', shortcut: 'P' },
      { name: 'About', route: '/about', icon: 'mdi:briefcase-account-outline', shortcut: 'A' },
    ],
  },

]

export const fetchMenuListByHeader = (header: string): MenuList | undefined => {
  return menuList.find(section => section.header === header)
}
