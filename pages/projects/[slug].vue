<script setup lang="ts">
const route = useRoute();
const { data: project } = await useAsyncData(`project-${route.params.slug}`, () => queryContent(`/projects/${route.params.slug}`).findOne());
</script>

<template>
  <div v-if="project" class="container mx-auto px-5 sm:px-6 lg:px-8 py-8">
    <div class="mb-3 text-lg sm:text-xl md:text-2xl font-bold">
      <NuxtLink to="/projects" class="hover:underline hover:scale-105 transition-transform duration-300 inline-block">Projects</NuxtLink>
      <span class="text-gray-500 mx-2">&gt;</span>
      <span>{{ project.title }}</span>
    </div>

    <div v-if="project.image" class="mb-4 overflow-hidden aspect-[45/16] w-full">
      <img 
        :src="project.image" 
        :alt="project.title" 
        width="1440"
        height="512"
        class="w-full h-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-300" 
      />
    </div>
    <div 
      v-else 
      class="bg-gray-800 rounded-lg p-4 mb-4 text-center text-gray-400 aspect-[45/16] w-full flex items-center justify-center"
    >
      <span class="text-sm sm:text-base md:text-lg">Image not available</span>
    </div>

    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"> 
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="tag in project.tags" 
          :key="tag" 
          class="bg-secondary text-secondary-foreground rounded-full px-3 py-1.5 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors duration-300 ease-in-out transform hover:scale-105"
        >
          #{{ tag }}
        </span>
      </div>

      <div class="flex flex-wrap gap-4">
        <a
          v-if="project.repository_url"
          :href="project.repository_url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-foreground hover:text-primary transition-colors duration-300 ease-in-out transform hover:scale-110"
        >
          <Icon name="mdi:github" size="20" />
        </a>
        <a
          v-if="project.production_url"
          :href="project.production_url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-green-500 hover:text-green-400 transition-colors duration-300 ease-in-out transform hover:scale-110"
        >
          <Icon name="mdi:link" size="20" />
        </a>
        <span v-if="!project.repository_url && !project.production_url" class="text-muted-foreground italic text-sm">
          No external links available
        </span>
      </div>
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
