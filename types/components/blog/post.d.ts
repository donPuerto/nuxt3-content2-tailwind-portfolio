export interface Post {
  _path: string
  slug: string
  title: string
  subtitle?: string
  series?: string
  image: string
  description: string
  publishedOn: string
  published: boolean
  author: string
  readingTime: string
  tag: string[]
}
