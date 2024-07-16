export interface Author {
  name: string
  avatar: string
  slug: string
}

export interface Post {
  _path: string
  slug: string
  headline: string
  title: string
  subtitle?: string
  series?: string
  description?: string
  image: string
  alt?: string
  published_on: string
  is_publish: boolean
  authors: Author | Author[] | string
  reading_time: string
  tag: string[]
}
