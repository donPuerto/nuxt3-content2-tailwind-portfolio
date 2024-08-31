<script lang="ts" setup>
import type { Post } from '~/types/components/blog/post'

const route = useRoute()

const { data: post, status, error, refresh } = await useAsyncData<Post>(
  'fetch-blog',
  () => queryContent<Post>().where({ slug: route.params.slug }).findOne(),
)
</script>

<template>
  <div>
    <BlogRender
      v-if="post"
      :post="post"
      :status="status"
      :error="error"
      :refresh="refresh"
    />
    <p v-else-if="error">
      Error: {{ error.message }}
    </p>
    <p v-else-if="status === 'pending'">
      Loading...
    </p>
    <p v-else>
      Post not found
    </p>
  </div>
</template>

<style></style>
