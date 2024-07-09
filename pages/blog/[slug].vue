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
        title: result.title ?? '',
        subtitle: result.subtitle ?? undefined,
        series: result.series ?? undefined,
        image: result.image ?? '',
        description: result.description ?? '',
        publishedOn: result.publishedOn ?? '',
        published: result.published ?? false,
        author: result.author ?? '',
        readingTime: result.readingTime ?? '',
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
    {{ post }}
    <ContentPost :post="post" />
  </main>
</template>

<style></style>
