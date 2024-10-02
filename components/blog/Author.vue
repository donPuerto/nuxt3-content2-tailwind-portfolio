<script setup lang="ts">
// Import the Author type from the types file
import type { Author } from '~/types';

// Define the props interface
interface Props {
  author: Author;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  showSlug?: boolean;
}

// Set default values for props
const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  showSlug: true,
});

// Compute the initials from the author's name
const initials = computed(() => {
  return props.author.name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
});

// Compute size classes based on the size prop
const sizeClasses = computed(() => ({
  'w-5 h-5 text-xs': props.size === 'xs',
  'w-6 h-6 text-sm': props.size === 'sm',
  'w-8 h-8 text-base': props.size === 'md',
  'w-10 h-10 text-lg': props.size === 'lg',
}));

// Compute text classes based on the size prop
const textClasses = computed(() => ({
  'text-xs': props.size === 'xs' || props.size === 'sm',
  'text-sm': props.size === 'md',
  'text-base': props.size === 'lg',
}));

// Update this computed property
const authorSlug = computed(() => {
  if (props.author.slug) return props.author.slug;
  return props.author.name.toLowerCase().replace(/\s+/g, '-');
});

// Add this computed property for display purposes only
const authorDisplaySlug = computed(() => `@${authorSlug.value}`);
</script>

<template>
  <!-- Update the NuxtLink :to prop -->
  <NuxtLink :to="`/authors/${authorSlug}`" class="flex items-center group">
    <!-- Avatar container -->
    <div v-if="author.avatar" class="mr-2 relative" :class="sizeClasses">
      <!-- Author's avatar image -->
      <img 
        :src="author.avatar" 
        :alt="author.name"
        class="rounded-full w-full h-full object-cover"
      />
      <!-- Hover effect border -->
      <div class="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-secondary transition-colors duration-300" />
    </div>
    <!-- Fallback for no avatar (initials) -->
    <div v-else :class="['mr-2 bg-primary text-primary-foreground rounded-full flex items-center justify-center relative', sizeClasses]">
      <!-- Author's initials -->
      <span>{{ initials }}</span>
      <!-- Hover effect border -->
      <div class="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-secondary transition-colors duration-300" />
    </div>
    <!-- Author's name and slug container -->
    <div class="flex flex-col ml-1">
      <!-- Author's name -->
      <span :class="textClasses">
        {{ author.name }}
      </span>
      <!-- Author's slug (optional) -->
      <span
        v-if="props.showSlug"
        :class="[textClasses, 'text-gray-500']"
      >
        {{ authorDisplaySlug }}
      </span>
    </div>
  </NuxtLink>
</template>
