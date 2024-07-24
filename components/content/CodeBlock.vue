<!-- components/content/CodeBlock.vue -->
<script setup>
import { ref } from 'vue'

const { showMessage } = useToastMessages()

const props = defineProps({
  title: {
    type: String,
    default: 'Code',
  },
})

const codeRef = ref(null)
const copied = ref(false)

const copyCode = () => {
  if (codeRef.value) {
    navigator.clipboard.writeText(codeRef.value.textContent)
    copied.value = true
    showMessage({
      type: 'success',
      title: 'Copied',
      description: 'Snippets have been copied',
    })
    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
}
</script>

<template>
  <div class="border  rounded-lg overflow-hidden ">
    <div class="bg-background text-foreground text-sm px-4 flex justify-between items-center py-2 ">
      <span>{{ title }}</span>

      <span
        class="cursor-pointer relative flex items-center"
        @click="copyCode"
      >
        <template v-if="copied">
          <Icon
            key="copied"
            name="material-symbols:check-box"
          />
        </template>
        <template v-else>
          <Icon
            key="copy"
            name="material-symbols:content-copy"
          />
        </template>

      </span>
    </div>

    <div
      ref="codeRef"
    >
      <ContentSlot
        :use="$slots.default"
        unwrap="p"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
