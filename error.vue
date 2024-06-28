<script setup lang="ts">
const props = defineProps<{
  error: {
    message: string
  }
}>()

const { error } = props
</script>

<template>
  <div class="bg-theme-bg-color flex h-screen flex-col items-center justify-center">
    <h1 class="mb-4 text-3xl font-bold">
      Error Alert!!
    </h1>
    <p
      class="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-2xl font-semibold text-transparent"
    >
      {{ error.message }}
    </p>
  </div>
</template>
