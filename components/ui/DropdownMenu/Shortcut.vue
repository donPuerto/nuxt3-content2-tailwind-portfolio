<script lang="ts" setup>
import { Primitive } from 'radix-vue'
import type { PrimitiveProps } from 'radix-vue'

const props = withDefaults(
  defineProps<
    PrimitiveProps & {
      /** Custom class(es) to add to the parent */
      class?: any
    }
  >(),
  {
    as: 'span',
  },
)

const styles = tv({
  base: 'ml-auto text-xs tracking-widest opacity-60',
})
</script>

<template>
  <Primitive
    :class="styles({ class: props.class })"
    v-bind="reactiveOmit(props, 'class')"
  >
    <slot />
  </Primitive>
</template>
