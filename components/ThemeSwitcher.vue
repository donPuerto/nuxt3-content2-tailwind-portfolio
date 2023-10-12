<script setup lang="ts">
  const iconClass = ref('pi-moon')

  const onThemeToggler = () => {
    const root = document.getElementsByTagName('html')[0]

    root.classList.toggle('dark')
    iconClass.value = iconClass.value === 'pi-moon' ? 'pi-sun' : 'pi-moon'
  }
</script>

<template>
  <button
    type="button"
    class="flex border-1 w-2rem h-2rem p-0 align-center justify-center"
    @click="onThemeToggler"
  >
    <i :class="`dark:text-white pi ${iconClass}`" />
  </button>
</template>
