export interface MenuList {
  header: string
  items: {
    name: string
    route: string
    icon: string
    shortcut: string
  }[]
}

export const menuList: MenuList = {
  header: 'Pages',
  items: [
    { name: 'Home', route: '/', icon: 'ri:home-2-line', shortcut: 'H' },
    { name: 'Blog', route: '/blog', icon: 'uil:notes', shortcut: 'B' },
    { name: 'Projects', route: '/projects', icon: 'ic:outline-work-outline', shortcut: 'P' },
    { name: 'About', route: '/about', icon: 'mdi:briefcase-account-outline', shortcut: 'A' },
  ],
}
