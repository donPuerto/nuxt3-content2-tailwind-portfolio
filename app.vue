<script setup lang="ts">
import LoadingIndicator from '@/components/LoadingIndicator.vue'

// const colorMode = useColorMode();
// console.log(colorMode.preference);

// Initialize the loading indicator with custom settings
const { start, finish } = useLoadingIndicator({
  duration: 2000,
  throttle: 200,
  estimatedProgress: (duration, elapsed) => (2 / Math.PI * 100) * Math.atan(elapsed / duration * 100 / 50),
})

// Use onMounted lifecycle hook to control the loading indicator programmatically
onMounted(() => {
  setTimeout(() => {
    start()
    setTimeout(() => {
      finish()
    }, 2000)
  }, 1000)
})

// console.log(colorMode);
</script>

<template>
  <NuxtLoadingIndicator
    color="#158876"
    error-color="#ff0000"
    :height="5"
  />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <LoadingIndicator />
</template>

<style lang="scss">

</style>
