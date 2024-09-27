<script setup lang="ts">
import type { Author } from '~/types';

interface Props {
  author: Author;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  showSlug?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  showSlug: true,
});

const initials = computed(() => {
  return props.author.name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
});

const sizeClasses = computed(() => ({
  'w-5 h-5 text-xs': props.size === 'xs',
  'w-6 h-6 text-sm': props.size === 'sm',
  'w-8 h-8 text-base': props.size === 'md',
  'w-10 h-10 text-lg': props.size === 'lg',
}));

const textClasses = computed(() => ({
  'text-xs': props.size === 'xs' || props.size === 'sm',
  'text-sm': props.size === 'md',
  'text-base': props.size === 'lg',
}));
</script>

<template>
  <div class="flex items-center glow-effect">
    <div v-if="author.avatar" class="mr-2">
      <img 
        :src="author.avatar" 
        :alt="author.name"
        :class="[sizeClasses, 'rounded-full']"
      />
    </div>
    <div v-else class="mr-2 bg-primary text-primary-foreground rounded-full flex items-center justify-center" :class="sizeClasses">
      {{ initials }}
    </div>
    <div class="flex flex-col ml-1">
      <span :class="textClasses">
        {{ author.name }}
      </span>
      <span
        v-if="showSlug"
        :class="[textClasses, 'text-gray-500']"
      >
        {{ author.slug || '@' + author.name.toLowerCase().replace(/\s+/g, '') }}
      </span>
    </div>
  </div>
</template>
