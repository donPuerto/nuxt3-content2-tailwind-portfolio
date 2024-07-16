<!-- eslint-disable no-console -->
<script lang="ts" setup>
import type { Post } from '~/types/components/blog/post'

const route = useRoute()

// const post = await queryContent().where({ slug: route.params.slug }).findOne()
const { data: post } = await useAsyncData<Post>('fetch-blog', () =>
  queryContent<Post>().where({ slug: route.params.slug }).findOne(),
)
// const { data } = await useAsyncData('home', () => queryContent('/').where({ slug: route.params.slug }).findOne())
</script>

<template>
  <div>
    <BlogRender
      v-if="post"
      :post="post"
    />
    <p v-else>
      Loading...
    </p>
  </div>
</template>

<style></style>
