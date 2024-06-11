<script setup lang="ts">
const props = defineProps<{
  error: {
    message: string
  }
}>()

const { error } = props
</script>

<template>
  <div class="bg-theme-bg-color flex flex-col items-center justify-center h-screen">
    <h1 class="text-3xl font-bold mb-4">
      Error Alert!!
    </h1>
    <p class="text-2xl font-semibold text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text">
      {{ error.message }}
    </p>
  </div>
</template>
