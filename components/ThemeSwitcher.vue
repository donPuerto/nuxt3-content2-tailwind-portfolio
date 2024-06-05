<template>
  <div class="relative">

    <button
      class="transition-all duration-200 w-max h-max p-2 flex items-center justify-center bg-white gap-2 rounded-lg border border-zinc-200"
      @click="toggleDropdown">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="currentColor"
          d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2" />
      </svg>
    </button>
    <ul v-if="dropdownOpen"
      class="absolute z-10 shadow-lg w-full h-max p-2 bg-white border border-zinc-200 rounded-lg flex flex-col gap-2 mt-2">
      <li v-for="(option, index) in themeOptions" :key="index"
        class="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg cursor-pointer"
        @mousedown.prevent="option.action">
        <svg v-if="option.icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
          <path :d="option.icon" fill="currentColor" />
        </svg>
        <p>{{ option.label }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()
const test = ref('test')
const dropdownOpen = ref(false)

interface ThemeOption {
  label: string
  value: string
  action: () => void
  icon?: string
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
    icon: 'M19 32h10v9H19z M5 8h38v24H5z M22 27h4M14 41h20', // Example icon path
  },
  {
    label: 'Light',
    value: 'light',
    action: () => switchTheme('light'),
    icon: 'M12 5q-.425 0-.712-.288T11 4V2q0-.425.288-.712T12 1q.425 0 .713.288T13 2v2q0 .425-.288.713T12 5z', // Example icon path
  },
  {
    label: 'Dark',
    value: 'dark',
    action: () => switchTheme('dark'),
    icon: 'M12 21q-3.775 0-6.387-2.613T3 12q0-3.45 2.25-5.988T11 3.05q.325-.05.575.088t.4.362q.15.225.163.525t-.188.575q-.425.65-.638 1.375T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q.775 0 1.538-.225t1.362-.625q.275-.175.563-.162t.512.137q.25.125.388.375t.087.6q-.35 3.45-2.937 5.725T12 21z', // Example icon path
  },
  {
    label: 'Sepia',
    value: 'sepia',
    action: () => switchTheme('sepia'),
    icon: 'M12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18z', // Example icon path
  },
]
</script>

<style scoped>
button {
  cursor: pointer;
}

svg {
  transition: transform 0.2s;
}

.rotate-180 {
  transform: rotate(180deg);
}

ul {
  display: flex;
}
</style>
