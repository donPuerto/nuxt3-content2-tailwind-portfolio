<script lang="ts" setup>
const isMenuOpen = ref(false)
const isSmallScreen = ref<boolean>(false)
// const activeTab = ref('home')
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
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

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
})
</script>

<template>
  <nav
    class="
      bg-theme-bg-primary-color
      border-theme-border-color
      shadow-lg
      border-binset-shadow
      p-4
    "
  >
    <div
      class="
        text-theme-text-primary-color
        container
        mx-auto
        flex
        items-center
        justify-between
        relative
      "
    >
      <div class="flex items-center">
        <div class="md:hidden mr-4">
          <button
            v-if="!isMenuOpen"
            class=" md:hidden "
            @click="toggleMenu"
          >
            <span
              class="i-mdi-hamburger
              cursor-pointer
              text-3xl"
            />
          </button>

          <span
            v-else
            class="i-mdi-hamburger-remove
            cursor-pointer
            text-3xl"
            @click="toggleMenu"
          />
        </div>

        <Logo />
      </div>
      <Menu
        :menu-items="['Home', 'About', 'Blog']"
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
          class="
            p-2
            flex
            items-center
            justify-center
            bg-transparent
            border-transparent
            border-2
            rounded-md
            hover:border-theme-border-color
            hover:bg-theme-bg-secondary-color
          "
        >
          <span
            class="i-material-symbols-keyboard-command-key
              cursor-pointer
              text-xl"
          />
        </button>

        <ThemeSwitcher />
      </div>
    </div>
  </nav>
  <DropMenu
    v-if="isMenuOpen"
    :menu-items="['Home', 'About', 'Blog']"
    :is-menu-open="isMenuOpen"
    class="bg-theme-bg-primary-color text-theme-text-primary-color border-theme-border-color container max-w-full md:hidden p-4 shadow-lg border-b"
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
/* .background {
  background-color: var(--bg-color);
} */
.inset-shadow {
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.6), 0 8px 16px rgba(0, 0, 0, 0.6);

}

.menu-item {
  @apply text-theme-text-primary-color transition-transform duration-200 ease-in-out;
}

.menu-item:hover {
  @apply text-transparent bg-gradient-to-r from-theme-text-primary-color to-theme-text-secondary-color bg-clip-text transform scale-110;

}

.menu-item:hover::after {
  transform: scaleX(1);
}

.dropdown-item {
  @apply block w-full transition-colors duration-200 ease-in-out bg-gray-800 text-white p-3 rounded-lg;
}

.dropdown-item:hover {
  @apply text-orange-500 bg-gray-600; /* Change font color and background on hover */
}

.active {
  @apply px-4 bg-slate-900 rounded-lg
}
</style>
