import { useAsyncData } from '#app'
import type { Post } from '~/types/components/blog/post'

// Define a type for the query result that doesn't require any specific fields
type QueryResult = Partial<Post>

export function useTagPosts(mainTag: string, postsPerPage: number) {
  const currentPage = useState(`currentPage-${mainTag}`, () => 1)
  const search = useState(`search-${mainTag}`, () => '')

  const { data: allPosts, pending } = useAsyncData<QueryResult[]>(
    `fetch-blog-posts-by-tag-${mainTag}`,
    () => queryContent('blog')
      .where({ tags: { $contains: mainTag } })
      .find(),
  )

  const filteredPosts = computed<Post[]>(() => {
    if (!allPosts.value) return []

    const postsWithTags = allPosts.value.filter((post): post is Post =>
      Array.isArray(post.tags) && post.tags.length > 0,
    )

    if (search.value === '') {
      return postsWithTags
    }

    return postsWithTags.filter(post =>
      post.tags.some(tag =>
        tag.toLowerCase().includes(search.value.toLowerCase()),
      ),
    )
  })

  const paginatedPosts = computed(() => {
    const start = (currentPage.value - 1) * postsPerPage
    const end = start + postsPerPage
    return filteredPosts.value.slice(start, end)
  })

  const totalPages = computed(() =>
    Math.ceil(filteredPosts.value.length / postsPerPage),
  )

  watch(search, () => {
    currentPage.value = 1
  })

  return {
    posts: paginatedPosts,
    allPosts,
    pending,
    totalPages,
    currentPage,
    search,
  }
}
