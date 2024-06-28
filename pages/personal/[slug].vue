<!-- eslint-disable no-console -->
<script lang="ts" setup>
/**
   * route.path /blog/test
   */
const route = useRoute()
console.log('route', route.path)
</script>

<template>
  <main>
    <ContentDoc>
      <template #default="{ doc }">
        <article>
          <h1>{{ doc.title }}</h1>
          <!-- <ContentRenderer :value="doc" /> -->
        </article>
      </template>

      <template #not-found>
        <h1>Document not found</h1>
      </template>
    </ContentDoc>
  </main>
</template>

<style></style>
