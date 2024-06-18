<!-- eslint-disable no-console -->
<script setup lang="ts">
/**
 * * Initialize variables
 */
const searchQuery = ref('')
const router = useRouter()

/**
 * * Defining Props "isVisible" as boolean and "menuItems" as array
 */
interface MenuItem {
  category: string
  items: { icon: string, name: string, shortcut: string[], route: string }[]
}

interface Props {
  isVisible: boolean
  menuItems: MenuItem[]
}

const props = defineProps<Props>()

/**
 * * Defining Emit to "close" an Event
 */

const emit = defineEmits(['close'])

/**
 * * Search Function
 */
const filteredMenuItems = computed(() => {
  if (!searchQuery.value) return props.menuItems

  return props.menuItems.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
    ),
  })).filter(category => category.items.length > 0)
})

/**
 * * Emit an event to parent component to close modal form
 */
const closeCommandPalette = () => {
  emit('close')
}

/**
 * * Handle click outside to close modal form
 */

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!target.closest('.palette-container')) {
    closeCommandPalette()
  }
}

/**
 * * Handle escape press key event
 */
const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    // Close the modal if Escape key is pressed
    closeCommandPalette()
  }
}

/**
 * * Handle shortcut key events
 */
const handleShortcut = (event: KeyboardEvent) => {
  const pressedKey = event.key.toUpperCase()

  props.menuItems.forEach((category) => {
    category.items.forEach((item) => {
      if (item.shortcut.includes(pressedKey)) {
        if (item.route.startsWith('http')) {
          window.location.href = item.route
        }
        else {
          router.push(item.route)
        }
      }
    })
  })
}

/**
 * *  Mount keydown and keyboard shortcuts
 */
onMounted(() => {
  window.addEventListener('keydown', handleEscape)
  window.addEventListener('keydown', handleShortcut)

  onUnmounted(() => {
    window.removeEventListener('keydown', handleEscape)
    window.removeEventListener('keydown', handleShortcut)
  })
})
</script>

<template>
  <div
    v-if="props.isVisible"
    class="palette-overlay"
    @click="handleClickOutside"
    @keydown.escape="handleEscape"
  >
    <!-- Palette container -->
    <div
      class="palette-container"
    >
      <!-- Search box container -->
      <div
        class="relative flex items-center pd-2"
      >
        <span class="i-material-symbols-search pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-theme-text-primary-color" />
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search or type a command..."
          class="search-input"
        >
        <div
          class="
            absolute
            inset-y-0
            right-3
            flex
            py-2
          "
        >
          <button
            class="close-button-container"
            @click="closeCommandPalette"
          >
            <KBD><span class="close-icon" /></KBD>
          </button>
        </div>
      </div>

      <!-- Results, show/hide based on command palette state -->
      <ul
        class="results-list"
      >
        <li
          v-for="(category, index) in filteredMenuItems"
          :key="index"
          class="result-category"
        >
          <h2
            class="category-title"
          >
            {{ category.category }}
          </h2>
          <ul
            class="category-items"
          >
            <li
              v-for="(item, subIndex) in category.items"
              :key="subIndex"
              class="category-item"
            >
              <div class="item-icon">
                <Icon
                  :name="item.icon"
                  color="text-theme-text-primary-color"
                  size="1.4em"
                />
              </div>

              <div class="item-name">
                <span>{{ item.name }}</span>
              </div>

              <div>
                <span class="item-shortcuts">
                  <KBD
                    v-for="key in item.shortcut"
                    :key="key"
                    class="font-sans"
                  >{{ key }}</KBD>
                </span>
              </div>
            </li>
          </ul>
        </li>
      </ul>

      <!-- Empty state, show/hide based on command palette state -->
      <div
        v-if="filteredMenuItems.length === 0"
        class="empty-state"
      >
        <Icon
          class="flex-none"
          name="i-line-md-person-search-twotone"
          color="text-theme-text-primary-color"
          size="2.3em"
        />
        <p class="mt-4 font-semibold text-theme-text-primary-color">
          No results found
        </p>
        <p class="mt-2 text-theme-text-primary-color">
          We couldn’t find anything with that term. Please try again.
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.palette-overlay {
    @apply fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20;
  }

.palette-container {
  @apply mx-auto max-w-xl transform divide-y divide-theme-border-color overflow-hidden rounded-xl bg-theme-bg-primary-color shadow-2xl ring-1 ring-black ring-opacity-5 transition-all;
}

.search-input {
  @apply h-12 w-full border-0 border-transparent pl-11 pr-4 text-sm text-theme-text-secondary-color bg-theme-bg-primary-color placeholder-theme-text-secondary-color focus:outline-none;
}

.close-button-container {
  @apply absolute inset-y-0 right-3 flex py-4 mt-1;
}

.close-icon {
    @apply i-mdi-keyboard-esc text-sm;
}

.results-list {
    @apply max-h-80 scroll-py-2 divide-gray-500 divide-opacity-10 overflow-y-auto;
  }

  .result-category {
    @apply p-2;
  }

  .category-title {
    @apply bg-theme-bg-secondary-color p-2 text-xs font-semibold text-theme-text-primary-color;
  }

  .category-items {
    @apply mt-2 text-sm text-theme-text-primary-color;
  }

  .category-item {
    @apply flex cursor-default select-none items-center px-3 py-1;
  }

  .item-icon {
    @apply h-5 w-5 flex-none text-theme-text-primary-color text-opacity-40;
  }

  .item-name {
    @apply ml-3 flex-auto truncate;
  }

  .item-shortcuts {
    @apply ml-3 flex-none text-xs font-semibold text-theme-text-primary-color space-x-1;
  }

  .empty-state {
    @apply border-t border-theme-border-color py-8 px-6 text-center text-sm sm:px-14;
  }

  .empty-icon {
    @apply i-material-symbols-account-circle-outline text-3xl flex-none text-theme-text-primary-color text-opacity-40;
  }

  .empty-title {
    @apply mt-4 font-semibold text-theme-text-primary-color;
  }

  .empty-message {
    @apply mt-2 text-theme-text-primary-color;
  }
</style>
