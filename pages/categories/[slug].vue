<script lang="ts" setup>
const route = useRoute()
const category = route.params.slug

// Fetch all posts
const { pending, data: posts } = await useLazyAsyncData<Post[]>('all-posts', () =>
  queryContent<Post>('/blog').find(),
)

// Compute posts for the current category
const categoryPosts = computed(() => {
  if (!posts.value) return []
  return posts.value.filter((post) => {
    const parts = post._path.split('/')
    return parts.length > 2 && parts[2] === category
  })
})
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">
      {{ category }} Posts
    </h1>
    <ul>
      <li
        v-for="post in categoryPosts"
        :key="post._path"
        class="mb-4"
      >
        <NuxtLink
          :to="`/blog/${post.slug}`"
          class="text-blue-600 hover:underline"
        >
          {{ post.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
