<script setup lang="ts">
const route = useRoute();
const { data: project } = await useAsyncData(`project-${route.params.slug}`, () => queryContent(`/projects/${route.params.slug}`).findOne());
</script>

<template>
  <div v-if="project" class="container mx-auto px-4 py-8">
    <div class="mb-8">
      <NuxtLink to="/projects" class="text-green-500 hover:underline">Projects</NuxtLink>
      <span class="text-gray-500 mx-2">&gt;</span>
      <span class="text-white">{{ project.title }}</span>
    </div>

    <div class="bg-yellow-500 rounded-lg p-4 mb-8 overflow-hidden">
      <img :src="project.image" :alt="project.title" class="w-full rounded-lg transform hover:scale-105 transition-transform duration-300" />
    </div>

    <div class="flex flex-wrap gap-2 mb-8">
      <span v-for="tag in project.tags" :key="tag" class="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
        {{ tag }}
      </span>
    </div>

    <div class="flex gap-4 mb-8">
      <a
        v-if="project.source_url"
        :href="project.source_url"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-gray-800 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700 transition-colors"
      >
        <IconGithub />
        GitHub
      </a>
      <a
        v-if="project.live_url"
        :href="project.live_url"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-green-600 transition-colors"
      >
        <IconExternalLink />
        Visit Website
      </a>
    </div>

    <div class="prose prose-invert max-w-none">
      <ContentRenderer :value="project" />
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<style scoped lang="postcss">
.prose h2 {
  @apply text-2xl font-bold mb-4 mt-8;
}
.prose p {
  @apply mb-4;
}
.prose a {
  @apply text-green-500 hover:underline;
}
.prose blockquote {
  @apply border-l-4 border-gray-600 pl-4 italic;
}
</style>
