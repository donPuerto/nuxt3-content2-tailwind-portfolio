<!-- eslint-disable no-console -->
<script lang="ts" setup>
/**
 * route.path /blog/test
 */
const route = useRoute()
// const slugArray = route.params.slug
// const slug = Array.isArray(slugArray) ? slugArray.join('/') : slugArray

const { slug } = route.params

const { data: post, error } = await useAsyncData('post', () =>
  queryContent().where({ slug }).findOne(),
)

if (error.value) {
  console.error('Error loading post:', error.value)
}
</script>

<template>
  <main>
    {{ post }}
  </main>
</template>

<style>

</style>
