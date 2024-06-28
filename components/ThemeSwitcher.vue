<script lang="ts" setup>
const colorMode = useColorMode()
const dropdownOpen = ref(false)

interface ThemeOption {
  label: string
  value: string
  action: () => void
  iconClass: string
}

const switchTheme = (theme: string) => {
  colorMode.preference = theme
  window.location.reload()
  closeDropdown()
}

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const closeDropdown = () => {
  dropdownOpen.value = false
}

const themeOptions: ThemeOption[] = [
  {
    label: 'System',
    value: 'system',
    action: () => switchTheme('system'),
    iconClass: 'i-tdesign-system-setting',
  },
  {
    label: 'Light',
    value: 'light',
    action: () => switchTheme('light'),
    iconClass: 'i-iconamoon-mode-light-bold',
  },
  {
    label: 'Dark',
    value: 'dark',
    action: () => switchTheme('dark'),
    iconClass: 'i-ph-moon-stars-bold',
  },
  {
    label: 'Sepia',
    value: 'sepia',
    action: () => switchTheme('sepia'),
    iconClass: 'i-ph-coffee-bold',
  },
]
</script>

<template>
  <div class="relative">
    <button
      data-twe-ripple-init
      class="hover:border-theme-border-color hover:bg-theme-bg-secondary-color flex items-center justify-center rounded-md border-2 border-transparent bg-transparent p-2"
      @click="toggleDropdown"
    >
      <span class="i-mdi-cog-outline cursor-pointer text-xl hover:text-primary" />
    </button>
    <ul
      v-if="dropdownOpen"
      class="bg-theme-bg-primary-color border-1 border-theme-border-color font-inter absolute right-0 z-10 mt-5 flex h-max w-32 flex-col rounded-lg p-2 text-sm shadow-xl"
    >
      <li
        v-for="(option, index) in themeOptions"
        :key="index"
        class="hover:bg-theme-bg-hover-color flex cursor-pointer flex-row items-center gap-2 rounded-lg p-3"
        @mousedown.prevent="option.action"
      >
        <span
          :class="option.iconClass + ' text-theme-text-primary-color cursor-pointer text-2xl'"
        />
        <p class="text-theme-text-secondary-color">
          {{ option.label }}
        </p>
      </li>
    </ul>
  </div>
</template>

<!-- <style scoped>

</style> -->
