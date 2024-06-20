<!-- eslint-disable no-console -->
<script setup lang="ts">
const personalPost = await queryContent('personal').sort({ published_on: -1 }).find()

console.log('posts', personalPost)
</script>

<template>
  <main>
    <ul>
      <li
        v-for="post in personalPost"
        :key="post.id"
      >
        <!-- <pre>
          {{ post }}
        </pre> -->
        <NuxtLink :to="post._path">
          {{ post.title }}
        </NuxtLink>
      </li>
    </ul>
    <!-- <div v-if="pending">
      {{ pending }}
    </div> -->
  </main>
</template>
