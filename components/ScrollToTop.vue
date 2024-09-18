<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';

// Props to allow customizable button position and size
const props = defineProps({
  position: {
    type: String,
    default: 'bottom-right',
  },
  size: {
    type: String,
    default: 'md',
  },
});

// Ref to track button visibility
const isVisible = ref(false);

// Function to scroll to top of the page
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Function to toggle visibility based on scroll position
const toggleVisibility = () => {
  isVisible.value = window.scrollY > 300;
};

// Computed property to determine button position
const buttonPosition = computed(() => {
  switch (props.position) {
  case 'bottom-left':
    return 'fixed bottom-8 left-8 z-50';
  case 'top-left':
    return 'fixed top-8 left-8 z-50';
  case 'top-right':
    return 'fixed top-8 right-8 z-50';
  default: // default to bottom-right
    return 'fixed bottom-8 right-8 z-50';
  }
});

// Computed property to determine button size
const buttonSize = computed(() => {
  switch (props.size) {
  case 'sm':
    return 'w-10 h-10';
  case 'lg':
    return 'w-14 h-14';
  default: // default to medium
    return 'w-12 h-12';
  }
});

// Computed property to determine icon size
const iconSize = computed(() => {
  switch (props.size) {
  case 'sm':
    return 'w-4 h-4';
  case 'lg':
    return 'w-8 h-8';
  default: // default to medium
    return 'w-6 h-6';
  }
});

// Set up scroll event listener on mount and remove it when component is unmounted
onMounted(() => {
  window.addEventListener('scroll', toggleVisibility);
});

onUnmounted(() => {
  window.removeEventListener('scroll', toggleVisibility);
});
</script>

<template>
  <button
    v-show="isVisible"
    :class="[buttonPosition, buttonSize]"
    class="bg-background text-foreground rounded-full shadow-lg hover:bg-accent hover:text-accent-foreground transition-all duration-75 ease-out-quart border border-border glow-effect flex items-center justify-center"
    @click="scrollToTop"
  >
    <Icon
      name="line-md:upload-outline-loop"
      :class="iconSize"
    />
  </button>
</template>

<style scoped>
.glow-effect {
  box-shadow: 0 0 10px hsl(var(--primary) / 30%),
              0 0 20px hsl(var(--primary) / 15%),
              0 0 30px hsl(var(--primary) / 10%);
  animation: pulse 0.5s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 10px hsl(var(--primary) / 30%),
                 0 0 20px hsl(var(--primary) / 15%),
                 0 0 30px hsl(var(--primary) / 10%);
  }
   50% {
    box-shadow: 0 0 15px hsl(var(--primary) / 40%),
                 0 0 25px hsl(var(--primary) / 20%),
                 0 0 35px hsl(var(--primary) / 15%);
  }
  100% {
    box-shadow: 0 0 10px hsl(var(--primary) / 30%),
                 0 0 20px hsl(var(--primary) / 15%),
                 0 0 30px hsl(var(--primary) / 10%);
  }
}
</style>
