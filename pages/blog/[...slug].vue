<script lang="ts" setup>
import type { Post } from '~/types/components/blog/post';

const route = useRoute();

const { data: post, status, error, refresh } = await useAsyncData<Post>(
  'fetch-blog',
  () => queryContent<Post>('blog')
    .where({
      _path: { $regex: new RegExp(`^/blog/${(route.params.slug as string[])?.join('/') ?? ''}`) },
    })
    .findOne(),
);
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
