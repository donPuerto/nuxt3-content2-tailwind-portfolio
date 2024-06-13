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
      @click="toggleDropdown"
    >
      <span
        class="i-mdi-cog-outline
        text-xl
        cursor-pointer
        hover:text-primary
        "
      />
    </button>
    <ul
      v-if="dropdownOpen"
      class="
        absolute
        z-10
        shadow-xl
        w-32
        h-max
        bg-theme-bg-primary-color
        p-2
        rounded-lg
        flex
        flex-col
        mt-5
        right-0
        border-1
        border-theme-border-color
        text-sm
        font-inter
      "
    >
      <li
        v-for="(option, index) in themeOptions"
        :key="index"
        class="
          flex
          flex-row
          gap-2
          items-center
          hover:bg-theme-bg-hover-color
          p-3
          rounded-lg
          cursor-pointer
        "
        @mousedown.prevent="option.action"
      >
        <span

          :class="option.iconClass + ' text-2xl cursor-pointer text-theme-text-primary-color'"
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
