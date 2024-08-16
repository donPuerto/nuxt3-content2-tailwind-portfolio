// composables/useTagPosts.ts

import type { Ref } from 'vue'
import { computed } from 'vue'
import type { Post } from '~/types/components/blog/post'

export function useTagPosts(mainTag: string, currentPage: Ref<number>, postsPerPage: number, search: Ref<string>) {
  const fetchPosts = () =>
    queryContent<Post>()
      .where({ tags: { $contains: mainTag } })
      .find()

  const { data: allPosts, pending } = useAsyncData<Post[]>(
    `fetch-blog-posts-by-tag-${mainTag}`,
    fetchPosts,
  )

  const filteredPosts = computed(() => {
    if (!allPosts.value) return []

    if (search.value === '') {
      return allPosts.value
    }

    return allPosts.value.filter(post =>
      post.tags.some(tag =>
        tag.toLowerCase().includes(search.value.toLowerCase())
        && tag.toLowerCase() !== mainTag.toLowerCase(),
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

  return {
    posts: paginatedPosts,
    allPosts,
    pending,
    totalPages,
  }
}
