<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
  error: Object as () => NuxtError,
});

const errorMessage = computed(() => {
  if (props.error && props.error.statusCode) {
    switch (props.error.statusCode) {
    case 404:
      return 'Oops! The page you\'re looking for can\'t be found.';
    case 500:
      return 'Server error. We\'re working on fixing this!';
    case 403:
      return 'Sorry, you don\'t have permission to access this page.';
    default:
      return props.error.message || 'An unexpected error occurred.';
    }
  } else {
    return props.error?.message || 'An unexpected error occurred.';
  }
});

const errorDetails = computed(() => {
  if (props.error && props.error.stack) {
    return props.error.stack;
  } else if (props.error && props.error.data) {
    return JSON.stringify(props.error.data, null, 2);
  } else {
    return '';
  }
});
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
    <div class="text-center w-full max-w-4xl mx-auto">
            
      <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ props.error?.statusCode || 'Error' }}</h1>
      <p class="text-lg md:text-xl text-muted-foreground mb-8">{{ errorMessage }}</p>
      
      <!-- Display error details if available -->
      <div v-if="errorDetails" class="text-left text-[10px] xs:text-xs sm:text-sm bg-muted p-2 md:p-4 rounded mb-8 overflow-x-auto">
        <pre class="whitespace-pre-wrap">{{ errorDetails }}</pre>
      </div>
      
      <NuxtLink
        to="/"
        class="shiny-button bg-primary text-primary-foreground font-bold py-2 px-4 rounded inline-block text-sm"
      >
        Go back home
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.shiny-button {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.shiny-button::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.3) 100%
  );
  transform: rotate(45deg);
  transition: all 0.3s ease;
}

.shiny-button:hover::before {
  left: 100%;
  top: 100%;
}

.shiny-button:hover {
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}
</style>
