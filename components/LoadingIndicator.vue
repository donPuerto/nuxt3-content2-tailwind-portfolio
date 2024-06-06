<script setup lang="ts">
// Initialize the loading indicator with custom settings
const { progress, isLoading, start, finish } = useLoadingIndicator({
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
</script>

<template>
  <div
    v-if="isLoading"
    class="loading-info"
  >
    Loading... {{ progress }}%
  </div>
</template>

<style scoped>
.loading-info {
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  border-radius: 5px;
}
</style>
