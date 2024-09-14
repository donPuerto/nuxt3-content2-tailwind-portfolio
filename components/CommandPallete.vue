<!-- eslint-disable @stylistic/max-statements-per-line -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { menuList } from '~/data'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'close': []
}>()

const isOpen = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value),
})

const router = useRouter()

const closeCommandPalette = () => {
  isOpen.value = false
  emit('close')
}

const handleSelect = (route: string) => {
  router.push(route)
  closeCommandPalette()
}

const items = computed(() => {
  return menuList.reduce((acc, menu) => {
    acc[menu.header] = menu.items.map(item => ({
      label: item.name,
      icon: item.icon,
      perform: () => handleSelect(item.route),
      shortcut: item.shortcut,
    }))
    return acc
  }, {} as Record<string, any[]>)
})

// Function to handle shortcuts
const handleShortcut = (event: KeyboardEvent) => {
  const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform)
  const modifier = isMac ? event.metaKey : event.ctrlKey

  // Handle Cmd+K or Ctrl+K to toggle CommandPalette
  if (modifier && event.key.toLowerCase() === 'k') {
    event.preventDefault()
    isOpen.value = !isOpen.value
    return true
  }

  // Only handle other shortcuts if CommandPalette is open
  if (isOpen.value) {
    // Handle menu item shortcuts
    for (const category of Object.values(items.value)) {
      for (const item of category) {
        if (item.shortcut) {
          const [modKey, key] = item.shortcut.toLowerCase().split('+')
          if (
            ((modKey === 'ctrl' && !isMac) || (modKey === '⌘' && isMac))
            && modifier
            && event.key.toLowerCase() === key
          ) {
            event.preventDefault()
            item.perform()
            return true
          }
        }
      }
    }
  }

  return false
}

// Function to handle ESC key and other keyboard events
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isOpen.value) {
    closeCommandPalette()
    return
  }

  if (handleShortcut(event)) {
    event.preventDefault()
  }
}

// Add event listener when component is mounted
onMounted(() => {
  document.addEventListener('keydown', handleKeyDown)
})

// Remove event listener when component is unmounted
onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50"
      >
        <div class="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="border-2 border-border rounded-lg overflow-hidden">
            <!-- Using border color from config -->
            <UiCommand class="w-full shadow-lg bg-popover">
              <div class="relative border-b border-border">
                <!-- Added border-border here -->
                <UiCommandInput
                  placeholder="Type a command or search..."
                  class="w-full pt-3 pb-3"
                />
                <UiButton
                  variant="ghost"
                  size="icon"
                  class="absolute right-1 top-1/2 transform -translate-y-1/2 p-1"
                  @click="closeCommandPalette"
                >
                  <Icon
                    name="heroicons:x-mark"
                    class="h-4 w-4"
                  />
                </UiButton>
              </div>
              <UiCommandList>
                <UiCommandEmpty>No results found.</UiCommandEmpty>
                <template
                  v-for="(item, label, i) in items"
                  :key="i"
                >
                  <UiCommandGroup :heading="label">
                    <UiCommandItem
                      v-for="(child, k) in item"
                      :key="k"
                      :text="child.label"
                      :icon="child.icon"
                      :value="child.label"
                      :shortcut="child.shortcut"
                      @select="
                        child.perform?.();
                        $event.preventDefault();
                      "
                    />
                  </UiCommandGroup>
                  <UiCommandSeparator class="last:hidden" />
                </template>
              </UiCommandList>
            </UiCommand>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* Add any additional styles here */
</style>
