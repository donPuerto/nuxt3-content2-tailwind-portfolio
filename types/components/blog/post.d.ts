export interface Post {
  _path: string
  slug: string
  headline: string
  title: string
  subtitle?: string
  series?: string
  description?: string
  body: string | MarkdownRoot
  image: string
  alt?: string
  published_on: string
  is_publish: boolean
  author: string
  author_avatar: string
  reading_time: string
  tag: string[]
}
