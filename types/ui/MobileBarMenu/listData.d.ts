export interface ListItem {
  name: string
  icon: string
  route: string
  shortcut: string
}

export interface ListData {
  header: string
  items: ListItem[]
}
