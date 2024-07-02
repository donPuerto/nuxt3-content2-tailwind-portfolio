<!-- eslint-disable no-console -->
<script lang="ts" setup>
const props = defineProps<{
  modelValue?: boolean
}>()

const emits = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const localModel = useVModel(props, 'modelValue', emits, { passive: true })

// const { navigation } = useContent()

console.log('localModel', localModel)
// console.log('navigation', navigation)
</script>

<template>
  <UiCommandDialog v-model:open="localModel">
    <UiDialogTitle class="sr-only">
      Documentation search modal
    </UiDialogTitle>
    <UiDialogDescription class="sr-only">
      Search the documentation for components, utilities, and more.
    </UiDialogDescription>

    <UiCommandInput placeholder="Search..." />
    <UiCommandList>
      <UiScrollArea class="h-[300px] w-full">
        <UiCommandEmpty>No results found.</UiCommandEmpty>
      </UiScrollArea>
    </UiCommandList>
  </UiCommandDialog>
</template>

<style>

</style>
