<!-- eslint-disable no-console -->
<script setup lang="ts">
import { ConfigProvider } from 'radix-vue'
import '@/assets/css/transitions.css'

const props = defineProps<{
  useId: () => string
}>()
</script>

<template>
  <div v-bind="$attrs">
    <ConfigProvider
      :use-id="props.useId"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </ConfigProvider>
    <UiToastToaster />
  </div>
</template>
