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
    text
    rounded
    type="button"
    class="border-none bg-transparent"
    @click="onThemeToggler"
  >
    <i :class="`dark:text-white pi ${iconClass}`" />
  </button>
</template>
