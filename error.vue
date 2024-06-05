<script setup lang="ts">

</script>

<template>
  <!-- Main Content -->
  <main
    id="main-content"
    class="main-error"
  >
    <ErrorPageNotFound />
  </main>
</template>

<style scoped>
  #main-content.main-error {
    @apply h-full flex flex-col items-center justify-center;
  }
</style>
