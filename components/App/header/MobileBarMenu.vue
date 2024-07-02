<!-- eslint-disable no-console -->
<script lang="ts" setup>
import type { MenuList } from '~/types/ui/MobileBarMenu/menuList'

// Define props
const props = defineProps<{
  menuList: MenuList
  modelValue?: boolean
}>()

const emits = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

// Manage local model state
const isOpen = ref(props.modelValue || false)

watch(() => props.modelValue, (newValue) => {
  isOpen.value = newValue
})

watch(isOpen, (newValue) => {
  emits('update:modelValue', newValue)
})

const router = useRouter()

const navigateTo = (route: string) => {
  isOpen.value = false
  router.push(route)
}
// Handle keyboard shortcuts
const handleShortcut = (event: KeyboardEvent) => {
  const shortcutKey = event.key.toLowerCase()
  const item = props.menuList.items.find(i => i.shortcut.toLowerCase() === shortcutKey)

  if (item) {
    navigateTo(item.route)
  }
}

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    isOpen.value = false
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
  <div
    v-if="isOpen"
    class="container flex items-center justify-center px-4"
  >
    <UiList class="max-w ">
      <h4
        class="
        uppercase
        text-[17px]
        font-medium
        sm:text-sm"
      >
        {{ props.menuList.header }}
      </h4>
      <template
        v-for="item in props.menuList.items"
        :key="item.name"
      >
        <NuxtLink :to="item.route">
          <UiListItem class="items-center px-4 hover:bg-primary hover:rounded-md">
            <Icon
              :name="item.icon"
              class="h-4 w-4"
            />
            <UiListContent>
              {{ item.name }}
            </UiListContent>

            <UiKbd
              size="md"
              class="ml-auto"
            >
              <span>
                ⌘{{ item.shortcut }}
              </span>
            </UiKbd>
          </UiListItem>
        </NuxtLink>
      </template>
    </UiList>
  </div>
</template>

<style>
/* Add your custom styles here */
</style>
