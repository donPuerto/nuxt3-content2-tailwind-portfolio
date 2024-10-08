<script setup lang="ts">
const { data: projects } = await useAsyncData('projects', () => queryContent('/projects').find());

// Ensure all projects have an icon
if (projects.value) {
  projects.value = projects.value.map(project => ({
    ...project,
    icon: project.icon || 'uil:file-alt', // Fallback icon if none is specified
  }));
}
</script>

<template>
  <div class="container mx-auto px-5 sm:px-6 lg:px-8 py-8">
    <div class="mb-8">
      <h1 class="text-md sm:text-lg md:text-xl font-bold flex items-center">
        <Icon name="uil:apps" class="h-6 w-6 text-primary mr-2" />
        Projects
      </h1>
      <p class="text-sm sm:text-lg text-muted-foreground mt-1">Explore our innovative solutions</p>
    </div>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <NuxtLink 
        v-for="project in projects" 
        :key="project._path" 
        :to="project._path"
        class="bg-card rounded-lg p-4 sm:p-6 flex items-center space-x-6 hover:bg-accent transition-colors border border-border hover:border-primary"
      >
        <div class="bg-muted rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
          <Icon :name="project.icon || 'uil:file-alt'" class="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <div class="flex-grow overflow-hidden">
          <h2 class="text-sm sm:text-base md:text-lg font-semibold mb-1 truncate">{{ project.title }}</h2>
          <p class="text-xs sm:text-sm text-muted-foreground truncate lg:whitespace-normal">{{ project.description }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>                       
</template>
