<script setup lang="ts">
const route = useRoute();
const appConfig = useAppConfig();
const runtimeConfig = useRuntimeConfig();

// Add size prop with validation
const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value: string) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value),
  },
  direction: {
    type: String,
    default: 'row',
    validator: (value: string) => ['row', 'column'].includes(value),
  },
});

const currentUrl = computed(() => {
  const baseUrl = runtimeConfig.public.siteUrl || 'http://localhost:3000';
  return `${baseUrl}${route.path}`;
});

const shareLinks = computed(() =>
  appConfig.app.shareLinks.map(link => ({
    ...link,
    url: `${link.url}${encodeURIComponent(currentUrl.value)}`,
  })),
);

// Define size values
const sizeValues = {
  xs: { default: '1em', x: '0.75em' },
  sm: { default: '1.25em', x: '1em' },
  md: { default: '1.5em', x: '1.25em' },
  lg: { default: '1.75em', x: '1.5em' },
  xl: { default: '2em', x: '1.75em' },
};

// Compute icon size based on prop and icon name
const getIconSize = (iconName: string) => {
  const sizeValue = sizeValues[props.size as keyof typeof sizeValues];
  return iconName === 'line-md:twitter-x' ? sizeValue.x : sizeValue.default;
};

const containerClasses = computed(() => [
  'flex',
  props.direction === 'column' ? 'flex-col space-y-2' : 'space-x-2',
]);
</script>

<template>
  <div :class="containerClasses">
    <a
      v-for="link in shareLinks"
      :key="link.name"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      class="share-link text-primary hover:text-ring transition-all duration-300 ease-in-out rounded-full p-2 flex items-center justify-center"
      :title="`Share on ${link.name}`"
    >
      <Icon
        :name="link.icon"
        :size="getIconSize(link.icon)"
      />
    </a>
  </div>
</template>

<style scoped>
.share-link {
  transform: translateY(0);
  transition: all 0.3s ease-in-out;
}

.share-link:hover {
  transform: translateY(-3px);
  background-color: var(--color-secondary);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.share-link:active {
  transform: translateY(-1px);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12);
}

.share-link .icon {
  transition: transform 0.3s ease-in-out;
}

.share-link:hover .icon {
  transform: scale(1.1);
  background-color: rgba(var(--color-secondary-rgb), 0.2);
}
</style>
