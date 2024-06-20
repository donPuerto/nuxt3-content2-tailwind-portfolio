<!-- eslint-disable no-console -->
<script lang="ts" setup>
/**
 * route.path /blog/test
 */
const route = useRoute()
console.log('route', route)
const post = await queryContent().where({ slug: route.params.slug }).findOne()

// const { data: post } = await useAsyncData('fetch-post', () =>
//   queryContent(route.path).only(['title', 'description', 'image']).findOne(),
// )

// console.log('fetch', data.value?.description)
</script>

<template>
  <main>
    <pre>

      {{ post }}
    </pre>
    <!-- <ContentDoc :path="$route.path">
      <template #default="{ doc }">
        <article>
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
      </template>

      <template #not-found>
        <h1>Document not found</h1>
      </template>
    </contentdoc> -->
  </main>
</template>

<style>

</style>
