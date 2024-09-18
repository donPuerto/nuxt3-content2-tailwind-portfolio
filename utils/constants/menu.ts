import type { MenuList } from '@/types';

export const MENU_LIST: MenuList[] = [
  {
    header: 'Pages',
    items: [
      { name: 'Home', route: '/', icon: 'ri:home-2-line', shortcut: '⌘H' },
      { name: 'Blog', route: '/blog', icon: 'uil:notes', shortcut: '⌘B' },
      { name: 'Projects', route: '/projects', icon: 'ic:outline-work-outline', shortcut: '⌘P' },
      { name: 'About', route: '/about', icon: 'mdi:briefcase-account-outline', shortcut: '⌘A' },
    ],
  },

];

export const FETCH_MENU_LIST_BY_HEADER = (header: string): MenuList | undefined => {
  return MENU_LIST.find(section => section.header === header);
};
