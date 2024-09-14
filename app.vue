<!-- eslint-disable no-console -->
<script setup lang="ts">
import { ConfigProvider } from 'radix-vue'
import '@/assets/css/transitions.css'

const useIdFunction = () => useId()
</script>

<template>
  <ConfigProvider :use-id="useIdFunction">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UiToastToaster />
  </ConfigProvider>
</template>
