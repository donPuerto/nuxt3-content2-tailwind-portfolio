<!-- eslint-disable no-console -->
<script lang="ts" setup>
import type { Post } from '~/types/components/blog/post'

const route = useRoute()
const post = ref<Post | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

// Fetch the post based on slug
onMounted(async () => {
  try {
    const result = await queryContent('/blog').where({ slug: route.params.slug }).findOne()
    if (result) {
      post.value = {
        _path: result._path ?? '',
        slug: result.slug ?? '',
        headline: result.headline ?? '',
        title: result.title ?? '',
        subtitle: result.subtitle ?? '',
        series: result.series ?? '',
        description: result.description ?? '',
        image: result.image ?? '',
        alt: result.alt ?? '',
        published_on: result.published_on ?? '',
        is_publish: result.published ?? false,
        author: result.author ?? '',
        author_avatar: result.author_avatar ?? '',
        reading_time: result.reading_time ?? '',
        tag: result.tag ?? [],
      }
    }
    else {
      error.value = 'Post not found'
    }
  }
  catch (err) {
    console.error('Error fetching post:', err)
    error.value = 'Failed to fetch post'
  }
  finally {
    loading.value = false
  }
})
</script>

<template>
  <main>
    <BlogPostCard :post="post" />
  </main>
</template>

<style></style>
