<!-- eslint-disable no-console -->
<script lang="ts" setup>
import { useWindowSize } from '@vueuse/core'
import type { MenuList } from '~/types/components/header/menu'

// Define props
const props = defineProps<{
  menuList?: MenuList
  modelValue: boolean
  forceClosed: boolean
}>()

const emits = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

// Get window size
const { width } = useWindowSize()

// Computed property to determine if the menu should be visible
const isMenuVisible = computed(() => {
  return props.modelValue && !props.forceClosed && width.value < 768
})

// Watch for screen size changes
// watch(width, (newWidth) => {
//   if (newWidth >= 768) {
//     emits('update:modelValue', false)
//   }
//   else {
//     emits('update:modelValue', true)
//   }
// })

// Handle keyboard shortcuts
const handleShortcut = (event: KeyboardEvent) => {
  const shortcutKey = event.key.toLowerCase()
  const item = props.menuList?.items.find(i => i.shortcut.toLowerCase() === shortcutKey)

  if (item) {
    navigateTo(item.route)
  }
}

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    emits('update:modelValue', false)
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEscape)
  window.addEventListener('keydown', handleShortcut)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape)
  window.removeEventListener('keydown', handleShortcut)
})
</script>

<template>
  <div class="container px-4 w-full md:hidden">
    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <UiList
        v-if="isMenuVisible"
        class="w-full"
      >
        <h4 class="mb-2 text-xs font-bold text-muted-foreground uppercase">
          {{ props.menuList?.header }}
        </h4>
        <template
          v-for="item in props.menuList?.items"
          :key="item.name"
        >
          <NuxtLink :to="item.route">
            <UiListItem class="px-3 py-1.5 hover:bg-accent hover:text-accent-foreground rounded-md">
              <Icon
                :name="item.icon"
                class="h-4 w-4 mr-3 text-muted-foreground"
              />
              <UiListContent class="text-sm font-medium">
                {{ item.name }}
              </UiListContent>

              <UiKbd
                size="sm"
                class="ml-auto text-xs text-muted-foreground"
              >
                <span>⌘{{ item.shortcut }}</span>
              </UiKbd>
            </UiListItem>
          </NuxtLink>
        </template>
      </UiList>
    </Transition>
  </div>
</template>

<style>
/* Add your custom styles here */
</style>
