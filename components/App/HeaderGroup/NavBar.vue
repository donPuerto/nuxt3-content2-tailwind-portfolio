<!-- eslint-disable no-console -->
<script lang="ts" setup>
import { menuItems } from '@/data/commandPaletteMenuItems'

const isMenuOpen = ref(false)
const isCommandPaletteOpen = ref(false)
const isSmallScreen = ref<boolean>(false)
// const activeTab = ref('home')
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleCommandPaletteButton = () => {
  isCommandPaletteOpen.value = !isCommandPaletteOpen.value
}

const toggleCommandPaletteKey = (event: KeyboardEvent) => {
  if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
    event.preventDefault()

    isCommandPaletteOpen.value = !isCommandPaletteOpen.value
  }
}

const closeCommandPalette = () => {
  isCommandPaletteOpen.value = false
}

onMounted(() => {
  isSmallScreen.value = document.documentElement.clientWidth <= 768

  if (isSmallScreen.value) {
    isMenuOpen.value = true // Open the menu by default on small screens
  }

  const handleResize = () => {
    isSmallScreen.value = document.documentElement.clientWidth <= 768
    if (isSmallScreen.value) {
      isMenuOpen.value = true // Open the menu automatically if resized to a small screen
    }
  }

  window.addEventListener('resize', handleResize)

  window.addEventListener('keydown', toggleCommandPaletteKey)

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)

    window.removeEventListener('keydown', toggleCommandPaletteKey)
  })
})
</script>

<template>
  <nav
    class="bg-theme-bg-primary-color border-theme-border-color border-binset-shadow p-4 shadow-lg"
  >
    <div
      class="text-theme-text-primary-color container relative mx-auto flex items-center justify-between"
    >
      <div class="flex items-center">
        <div class="mr-4 md:hidden">
          <button
            v-if="!isMenuOpen"
            class="md:hidden"
            @click="toggleMenu"
          >
            <span class="i-mdi-hamburger cursor-pointer text-3xl" />
          </button>

          <span
            v-else
            class="i-mdi-hamburger-remove cursor-pointer text-3xl"
            @click="toggleMenu"
          />
        </div>

        <Logo />
      </div>
      <Menu
        :menu-items="['', 'About', 'Blog']"
        :is-menu-open="isMenuOpen"
      />
      <!-- <div class="md:flex md:items-center md:space-x-4 hidden ">
        <a
          href="#"
          class="text-lg font-bold menu-item"
        >Home</a>
        <a
          href="#"
          class="text-lg font-bold menu-item"
        >About</a>
        <a
          href="#"
          class="text-lg font-bold menu-item"
        >Blog</a>
      </div> -->

      <div class="flex items-center space-x-1">
        <button
          class="hover:border-theme-border-color hover:bg-theme-bg-secondary-color flex items-center justify-center rounded-md border-2 border-transparent bg-transparent p-2"
          @click="toggleCommandPaletteButton"
        >
          <span class="i-material-symbols-keyboard-command-key cursor-pointer text-xl" />
        </button>
        <CommandPalette
          :menu-items="menuItems"
          :is-visible="isCommandPaletteOpen"
          @close="closeCommandPalette"
        />
        <ThemeSwitcher />
      </div>
    </div>
  </nav>

  <DropMenu
    v-if="isMenuOpen"
    :menu-items="['', 'About', 'Blog']"
    :is-menu-open="isMenuOpen"
    class="bg-theme-bg-primary-color text-theme-text-primary-color border-theme-border-color container max-w-full border-b p-4 shadow-lg md:hidden"
  />
  <!-- <div
    v-if="isMenuOpen"
    class="bg-background-color text-text-color border-border-color container max-w-full md:hidden p-3 shadow-lg border-b inset-shadow"
  >
    <div
      class="flex flex-col items-center"
    >
      <a
        href="#"
        class="dropdown-item  text-md font-bold"
        :class="{ active: activeTab === 'home' }"
        @click="activeTab = 'home'"
      >Home</a>

      <a
        href="#"
        class="dropdown-item  text-md font-bold"
        :class="{ active: activeTab === 'about' }"
        @click="activeTab = 'about'"
      >About</a>
      <a
        href="#"
        class="dropdown-item text-md font-bold"
        :class="{ active: activeTab === 'blog' }"
        @click="activeTab = 'blog'"
      >Blog</a>
    </div>
  </div> -->
</template>

<style scoped>
  .btn-toggle {
    padding: 8px 16px;
    background-color: #3490dc;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .btn-toggle:hover {
    background-color: #2779bd;
  }

  /* .background {
  background-color: var(--bg-color);
} */
  .inset-shadow {
    box-shadow:
      inset 0 1px 2px rgba(0, 0, 0, 0.6),
      0 8px 16px rgba(0, 0, 0, 0.6);
  }

  .menu-item {
    @apply text-theme-text-primary-color transition-transform duration-200 ease-in-out;
  }

  .menu-item:hover {
    @apply from-theme-text-primary-color to-theme-text-secondary-color scale-110 transform bg-gradient-to-r bg-clip-text text-transparent;
  }

  .menu-item:hover::after {
    transform: scaleX(1);
  }

  .dropdown-item {
    @apply block w-full rounded-lg bg-gray-800 p-3 text-white transition-colors duration-200 ease-in-out;
  }

  .dropdown-item:hover {
    @apply bg-gray-600 text-orange-500; /* Change font color and background on hover */
  }

  .active {
    @apply rounded-lg bg-slate-900 px-4;
  }
</style>
