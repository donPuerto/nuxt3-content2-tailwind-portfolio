import type { Author } from './author';

export interface Post {
  _path: string
  edit_url: string
  slug: string
  headline: string
  title: string
  subtitle?: string
  series?: string
  description?: string
  media: {
    type: 'image' | 'video'
    content: {
      image: {
        url: string
        alt: string
        width: number
        height: number
      }
      video: {
        url: string
        title: string
        thumbnail: {
          url: string
          alt: string
          width: number
          height: number
        }
      }
    }
  }
  alt?: string
  published_at: string
  updated_at: string
  is_publish: boolean
  authors: Author | Author[] | string
  reading_time: string
  tags: string[]
}

export interface TOCItem {
  id: string
  text: string | null
  level: number
  isActive: boolean
}
