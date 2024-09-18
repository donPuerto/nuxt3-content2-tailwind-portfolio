<script setup lang="ts">
import { ConfigProvider } from 'radix-vue';
import '@/assets/css/transitions.css';

const useIdFunction = () => useId() || '';
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
