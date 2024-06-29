<script lang="ts" setup>
import type { ListData } from '~/types/ui/MobileBarMenu/listData'

// Define props
const props = defineProps<{
  listData: ListData
}>()
</script>

<template>
  <div class="flex items-center justify-center ">
    <UiList class="max-w px-5 border border-sky-500 rounded-md mt-2">
      <h4>{{ props.listData.header }}</h4>
      <template
        v-for="item in props.listData.items"
        :key="item.name"
      >
        <UiListItem class="items-center px-4 hover:bg-primary rounded-md border">
          <Icon
            :name="item.icon"
            class="h-4 w-4"
          />
          <UiListContent>
            <NuxtLink :to="item.route">
              {{ item.name }}
            </NuxtLink>
          </UiListContent>

          <UiKbd
            size="md"
            class="ml-auto"
          >
            {{ item.shortcut }}
          </UiKbd>
        </UiListItem>
        <UiSeparator class="my-2.5 ml-auto w-[85%] last:hidden" />
      </template>
    </UiList>
  </div>
</template>

<style>
/* Add your custom styles here */
</style>
