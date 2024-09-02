<!-- eslint-disable no-console -->
<script lang="ts" setup>
import { menuList } from '~/data'

const props = defineProps<{
  modelValue?: boolean
}>()

const emits = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const dialog = useVModel(props, 'modelValue', emits, { passive: true })
</script>

<template>
  <div
    class="flex w-full items-center justify-center"
  >
    <UiCommandDialog
      v-model:open="dialog"
    >
      <UiCommand>
        <DialogTitle class="sr-only">
          Command Search
        </DialogTitle>

        <UiCommandInput placeholder="Search..." />

        <UiCommandList>
          <UiScrollArea class="h-[300px] w-full">
            <UiCommandEmpty>No results found.</UiCommandEmpty>
            <template
              v-for="(menu, index) in menuList"
              :key="index"
            >
              <UiCommandGroup :heading="menu.header">
                <UiCommandItem
                  v-for="item in menu.items"
                  :key="item.name"
                  class="px-4 py-2 first:mt-2"
                  :value="item.name"
                  @select="
                    $event.preventDefault();
                    navigateTo(item.route);
                    dialog = false;
                  "
                >
                  <Icon
                    :name="item.icon"
                    class="h-4 w-4 text-muted-foreground/80"
                  />
                  <span>{{ item.name }}</span>
                </UiCommandItem>
              </UiCommandGroup>
              <UiCommandSeparator class="last:hidden" />
            </template>
          </UiScrollArea>
        </UiCommandList>
      </UiCommand>
    </UiCommandDialog>
  </div>
</template>
