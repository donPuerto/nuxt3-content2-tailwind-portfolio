<!-- eslint-disable no-console -->
<script setup lang="ts">
/**
 * * Initialize variables
 */
const searchQuery = ref('')

/**
 * * Defining Props "isVisible" as boolean
 */
interface Props {
  isVisible: boolean
}

const props = defineProps<Props>()

/**
 * * Defining Emit to "close" an Event
 */

const emit = defineEmits(['close'])

/**
 * * Search Function
 */
const search = () => {
  console.log(searchQuery.value)
}

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
  if (!(event.target as HTMLElement).closest('.bg-white')) {
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
 * * Mount keydown
 */
onMounted(() => {
  window.addEventListener('keydown', handleEscape)

  onUnmounted(() => {
    window.removeEventListener('keydown', handleEscape)
  })
})
</script>

<template>
  <!-- Background overlay, show/hide modal state based on v-if statement "isVisible" -->
  <div
    v-if="props.isVisible"
    class="
      fixed
      inset-0
      z-10
      overflow-y-auto
      p-4
      sm:p-6
      md:p-20
    "
    role="dialog"
    aria-modal="true"
    @click="handleClickOutside"
    @keydown.escape="handleEscape"
  >
    <!-- Background Overlay -->
    <div
      class="
        mx-auto
        max-w-xl
        transform
        divide-y
        divide-gray-100
        overflow-hidden
        rounded-xl
        bg-theme-bg-primary-color
        shadow-2xl
        ring-1
        ring-black
        ring-opacity-5
        transition-all
      "
    >
      <!-- Search box container -->
      <div
        class="
        relative
        flex
        item-center
      "
      >
        <!-- Heroicon name: solid/search -->
        <svg
          class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          />
        </svg>

        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search or type a command..."
          class="
            h-12
            w-full
            border-0
            border-transparent
            pl-11
            pr-4
            text-sm
            text-theme-text-primary-color
            placeholder-gray-400
            focus:ring-0

          "
          @input="search"
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
          <!-- Close (ESC) icon -->
          <button
            class="
              px-2
              py-0
              flex
              items-center
              justify-center
              border-2
              rounded-md
              border-theme-border-color
              bg-theme-bg-secondary-color
              text-theme-text-primary-color
          "
            @click="closeCommandPalette"
          >
            <span
              class="
                 i-mdi-keyboard-esc
                 text-sm

              "
            />
          </button>
        </div>
      </div>

      <!-- Default state, show/hide based on command palette state -->
      <div class="border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14">
        <!-- Heroicon name: outline/globe -->
        <svg
          class="mx-auto h-6 w-6 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p class="mt-4 font-semibold text-gray-900">
          Search for clients and projects
        </p>
        <p class="mt-2 text-gray-500">
          Quickly access clients and projects by running a global search.
        </p>
      </div>

      <!-- Results, show/hide based on command palette state -->
      <ul
        id="options"
        class="max-h-80 scroll-pt-11 scroll-pb-2 space-y-2 overflow-y-auto pb-2"
        role="listbox"
      >
        <li>
          <h2 class="bg-gray-100 py-2.5 px-4 text-xs font-semibold text-gray-900">
            Clients
          </h2>
          <ul class="mt-2 text-sm text-gray-800">
            <!-- Active: "bg-indigo-600 text-white" -->
            <li
              id="option-1"
              class="cursor-default select-none px-4 py-2"
              role="option"
              tabindex="-1"
            >
              Workflow Inc.
            </li>
            <li
              id="option-2"
              class="cursor-default select-none px-4 py-2"
              role="option"
              tabindex="-1"
            >
              Multinational LLC.
            </li>
          </ul>
        </li>
        <li>
          <h2 class="bg-gray-100 py-2.5 px-4 text-xs font-semibold text-gray-900">
            Projects
          </h2>
          <ul class="mt-2 text-sm text-gray-800">
            <!-- Active: "bg-indigo-600 text-white" -->
            <li
              id="option-3"
              class="cursor-default select-none px-4 py-2"
              role="option"
              tabindex="-1"
            >
              Workflow Inc. / Website Redesign
            </li>
            <li
              id="option-3"
              class="cursor-default select-none px-4 py-2"
              role="option"
              tabindex="-1"
            >
              Multinational LLC. / Animation
            </li>
          </ul>
        </li>
      </ul>

      <!-- Empty state, show/hide based on command palette state -->
      <div class="border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14">
        <!-- Heroicon name: outline/emoji-sad -->
        <svg
          class="mx-auto h-6 w-6 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p class="mt-4 font-semibold text-gray-900">
          No results found
        </p>
        <p class="mt-2 text-gray-500">
          We couldn’t find anything with that term. Please try again.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Additional styles if needed */
</style>
