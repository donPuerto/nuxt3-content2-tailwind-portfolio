<script setup lang="ts">
import { ConfigProvider } from 'radix-vue';
import '@/assets/css/transitions.css';

const useIdFunction = () => useId() || '';

// const error = useError();

// Simulate an error after a short delay
// onMounted(() => {
//   setTimeout(() => {
//     error.value = createError({
//       statusCode: 404,
//       message: 'This is a simulated 404 error',
//     });
//   }, 1000);
// });
</script>

<template>
  <div>
    <ConfigProvider :use-id="useIdFunction">
      <NuxtLoadingIndicator 
        class="h-[5px] bg-primary"
      />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </ConfigProvider>
    <UiToastToaster />
  </div>
</template>
