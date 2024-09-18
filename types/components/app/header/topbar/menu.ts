export interface MenuListItem {
    name: string
    icon: string
    route: string
    shortcut: string
  }
  
export interface MenuList {
    header: string
    items: MenuListItem[]
  }
