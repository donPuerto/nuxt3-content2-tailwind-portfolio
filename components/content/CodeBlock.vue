<!-- components/content/CodeBlock.vue -->
<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})

const codeRef = ref(null)
const copied = ref(false)

const copyAllCode = () => {
  if (codeRef.value) {
    const codeText = codeRef.value.textContent
    navigator.clipboard.writeText(codeText)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
}
</script>

<template>
  <div class="border border-gray-300 rounded-lg overflow-hidden my-4">
    <div
      v-if="title"
      class="bg-gray-200 px-4 py-2 flex justify-between items-center"
    >
      <span class="font-bold text-gray-800">{{ title }}</span>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
        @click="copyAllCode"
      >
        {{ copied ? 'Copied!' : 'Copy All' }}
      </button>
    </div>
    <div ref="codeRef">
      <ContentSlot :use="$slots.default" />
    </div>
  </div>
</template>

<style scoped>
:deep(h3) {
  @apply bg-gray-100 px-4 py-2 font-semibold text-gray-700 mt-0;
}

:deep(pre) {
  @apply bg-gray-50 p-4 overflow-x-auto mt-0;
}

:deep(p) {
  @apply my-2 px-4;
}
</style>
