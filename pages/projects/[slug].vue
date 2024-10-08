<script setup lang="ts">

const route = useRoute();
const { data: project } = await useAsyncData(`project-${route.params.slug}`, () => queryContent(`/projects/${route.params.slug}`).findOne());

// Add error handling
if (!project.value) {
  throw createError({ statusCode: 404, message: 'Project not found' });
}

// Custom directive to style list items
const vStyleListItems = {
  mounted: (el: HTMLElement) => {
    const listItems = el.querySelectorAll('li');
    listItems.forEach(li => {
      const strong = li.querySelector('strong');
      if (strong) {
        const text = li.innerHTML.split(strong.outerHTML)[1];
        li.innerHTML = `${strong.outerHTML}<span class="text-muted-foreground">${text}</span>`;
      }
    });
  },
};
</script>

<template>
  <div v-if="project" class="container mx-auto px-5 sm:px-6 lg:px-8 py-8">
    <div class="mb-3 text-sm sm:text-base md:text-lg lg:text-xl font-bold">
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
          class="bg-secondary text-secondary-foreground rounded-full p-1.5 hover:bg-primary hover:text-primary-foreground transition-colors duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center w-8 h-8"
        >
          <Icon name="line-md:github" size="18" />
        </a>
        <a
          v-if="project.production_url"
          :href="project.production_url"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-secondary text-secondary-foreground rounded-full p-1.5 hover:bg-primary hover:text-primary-foreground transition-colors duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center w-8 h-8"
        >
          <Icon name="line-md:external-link" size="18" />
        </a>
        <span v-if="!project.repository_url && !project.production_url" class="text-muted-foreground italic text-sm">
          No external links available
        </span>
      </div>
    </div>

    <div v-style-list-items class="project-content max-w-none">
      <ContentRenderer :value="project" />
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<style scoped lang="postcss">
.project-content {
  @apply text-foreground text-sm sm:text-base max-w-none;

  :deep(h1), :deep(h2), :deep(h3), :deep(h4), :deep(h5), :deep(h6) {
    @apply text-foreground font-bold mb-4 mt-6;
  }
  :deep(h1) { @apply text-xl sm:text-2xl md:text-3xl lg:text-4xl; }
  :deep(h2) { @apply text-lg sm:text-xl md:text-2xl lg:text-3xl; }
  :deep(h3) { @apply text-base sm:text-lg md:text-xl lg:text-2xl; }
  :deep(h4) { @apply text-sm sm:text-base md:text-lg lg:text-xl; }
  :deep(h5) { @apply text-sm sm:text-sm md:text-base lg:text-lg; }
  :deep(h6) { @apply text-xs sm:text-sm md:text-sm lg:text-base; }

 :deep(a) {
    @apply text-primary hover:text-primary/80 transition-colors duration-200;
  }
  
  :deep(ul), :deep(ol) {
    @apply pl-10 mb-4; 
  }
  :deep(ul) { 
    @apply list-disc; 
  }
  :deep(ol) { 
    @apply list-decimal; 
  }
  :deep(li) { 
    @apply mb-2; 
    line-height: 1.2;
    padding-left: 0.5em;
  }
  :deep(li::marker) {
    @apply text-primary;
  }

  :deep(p) {
    @apply mb-5 leading-relaxed;
    text-align: justify;
    line-height: 1.2;

  }
}
</style>
