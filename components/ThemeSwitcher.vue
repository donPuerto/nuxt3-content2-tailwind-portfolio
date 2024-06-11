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
    iconClass: 'i-material-symbols-settings',
  },
  {
    label: 'Light',
    value: 'light',
    action: () => switchTheme('light'),
    iconClass: 'i-material-symbols-light-mode',
  },
  {
    label: 'Dark',
    value: 'dark',
    action: () => switchTheme('dark'),
    iconClass: 'i-material-symbols-dark-mode',
  },
  {
    label: 'Sepia',
    value: 'sepia',
    action: () => switchTheme('sepia'),
    iconClass: 'i-material-symbols-sepia-mode',
  },
]
</script>

<template>
  <div class="relative">
    <button
      class="p-2 flex items-center justify-center hover:border-2 hover:rounded-md"
      @click="toggleDropdown"
    >
      <span
        class="i-material-symbols-settings
        text-xl
        cursor-pointer
        hover:text-primary
        "
      />
    </button>
    <ul
      v-if="dropdownOpen"
      class="absolute z-10 shadow-lg w-full h-max p-2 bg-primary border-zinc-200 rounded-lg flex flex-col gap-2 mt-2"
    >
      <li
        v-for="(option, index) in themeOptions"
        :key="index"
        class="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg cursor-pointer"
        @mousedown.prevent="option.action"
      >
        <span
          :class="option.iconClass + ' text-5xl cursor-pointer text-green-800'"
        />
        <p>{{ option.label }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
button {
  cursor: pointer;
}

ul {
  display: flex;
}
</style>
