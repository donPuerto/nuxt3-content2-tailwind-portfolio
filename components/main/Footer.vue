<script setup lang="ts">
  const currentYear = ref('')
  onMounted(() => {
    // Get the current year dynamically
    const year = new Date().getFullYear()
    currentYear.value = year.toString()
  })
</script>

<template>
  <div class="text-zinc-700 dark:text-zinc-300">
    <div class="px-6 container max-w-5xl mx-auto">
      <div class="border-t dark:border-gray-800 pb-3 pt-4 text-center p-2">
        © 2015-{{ currentYear }} One DP App. All Rights Reserved.
      </div>
    </div>
  </div>
</template>

<style>
  /* we will explain what these classes do next! */
  .v-enter-active,
  .v-leave-active {
    transition: all 0.4s;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
</style>
