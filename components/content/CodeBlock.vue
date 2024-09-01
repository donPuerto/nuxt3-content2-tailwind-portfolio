<!-- components/content/CodeBlock.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from '@/composables/useToast' // Adjust the import path as needed

defineProps<{
  title?: string
}>()

const codeRef = ref<HTMLElement | null>(null)
const { toast } = useToast()

const copyAllCode = () => {
  if (codeRef.value) {
    const codeText = codeRef.value.textContent
    navigator.clipboard.writeText(codeText || '')

    // Show toast notification
    toast({
      title: 'Copied!',
      description: 'Code has been copied to clipboard',
      variant: 'success',
      duration: 3000,
    })
  }
}
</script>

<template>
  <div class="my-4 relative">
    <div class="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
      <div class="bg-gray-100 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <span
          v-if="title"
          class="font-medium text-sm text-gray-800 dark:text-gray-200"
        >
          {{ title }}
        </span>
        <span v-else></span>
        <button
          class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none transition-colors"
          @click="copyAllCode"
        >
          <Icon
            name="ph:copy"
            size="1.2em"
          />
        </button>
      </div>
      <div class="overflow-x-auto">
        <pre
          ref="codeRef"
          class="p-4 text-sm font-mono text-gray-800 dark:text-gray-200"
        ><code><slot></slot></code></pre>
      </div>
    </div>
  </div>
</template>
