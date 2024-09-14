<script lang="ts" setup>
import { ComboboxInput } from 'radix-vue'
import { ref } from 'vue'

defineOptions({ inheritAttrs: false })

const props = defineProps<{
  /** Custom class(es) to add to the input element */
  class?: any
  /** The icon to render */
  icon?: string
  /** The input type */
  type?: string
  /** Whether the input is disabled */
  disabled?: boolean
  /** Whether to show the cancel button */
  showCancel?: boolean
}>()

const styles = tv({
  base: 'flex h-11 w-full bg-transparent py-3 pl-9 pr-3 outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm focus:ring-0 focus:ring-offset-0 focus:outline-none focus:border-0 active:outline-none active:border-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none border-transparent',
})

const inputRef = ref<HTMLInputElement | null>(null)
</script>

<template>
  <div
    class="relative flex items-center w-full border-b border-border"
    cmdk-input-wrapper=""
  >
    <Icon
      :name="icon || 'lucide:search'"
      class="absolute left-3 h-4 w-4 shrink-0 opacity-50 pointer-events-none"
    />
    <ComboboxInput
      v-bind="$attrs"
      ref="inputRef"
      :type="type ?? 'text'"
      :disabled="disabled"
      auto-focus
      :class="styles({ class: props.class })"
    />
    <UiCommandCancel
      v-if="showCancel"
      class="absolute right-3"
    />
  </div>
</template>

<style scoped>
input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-color: transparent !important;
}

input:focus {
  outline: none !important;
  box-shadow: none !important;
  -webkit-tap-highlight-color: transparent;
  border-color: transparent !important;
}
</style>
