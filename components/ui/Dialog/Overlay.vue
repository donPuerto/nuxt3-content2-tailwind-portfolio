<script lang="ts" setup>
import { DialogOverlay } from 'radix-vue'
import type { DialogOverlayProps } from 'radix-vue'

const props = defineProps<
  DialogOverlayProps & {
    /** Custom class(es) to add to the parent */
    class?: any
  }
>()
const styles = tv({
  base: 'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=closed]:animate-fadeOut data-[state=open]:animate-fadeIn',
})
</script>

<template>
  <DialogOverlay
    :class="styles({ class: props.class })"
    v-bind="reactiveOmit(props, 'class')"
  />
</template>
