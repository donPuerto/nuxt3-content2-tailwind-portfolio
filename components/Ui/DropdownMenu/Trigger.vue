<script lang="ts" setup>
import { DropdownMenuTrigger } from 'radix-vue';
import type { DropdownMenuTriggerProps } from 'radix-vue';

const props = defineProps<DropdownMenuTriggerProps>();
</script>

<template>
  <DropdownMenuTrigger v-bind="props">
    <slot />
  </DropdownMenuTrigger>
</template>
