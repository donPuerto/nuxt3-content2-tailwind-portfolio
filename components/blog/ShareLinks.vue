<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAppConfig, useRuntimeConfig } from '#app'

const route = useRoute()
const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()

// Add size prop with validation
const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value: string) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value),
  },
})

const currentUrl = computed(() => {
  const baseUrl = runtimeConfig.public.siteUrl || 'http://localhost:3000'
  return `${baseUrl}${route.path}`
})

const shareLinks = computed(() =>
  appConfig.app.shareLinks.map(link => ({
    ...link,
    url: `${link.url}${encodeURIComponent(currentUrl.value)}`,
  })),
)

// Define size values
const sizeValues = {
  xs: { default: '1em', x: '0.75em' },
  sm: { default: '1.25em', x: '1em' },
  md: { default: '1.5em', x: '1.25em' },
  lg: { default: '1.75em', x: '1.5em' },
  xl: { default: '2em', x: '1.75em' },
}

// Compute icon size based on prop and icon name
const getIconSize = (iconName: string) => {
  const sizeValue = sizeValues[props.size]
  return iconName === 'line-md:twitter-x' ? sizeValue.x : sizeValue.default
}
</script>

<template>
  <div class="flex space-x-2">
    <a
      v-for="link in shareLinks"
      :key="link.name"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      class="text-gray-500 hover:text-primary transition-colors duration-200"
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
.icon-wrapper :deep(svg) {
  width: 100%;
  height: 100%;
}
</style>
