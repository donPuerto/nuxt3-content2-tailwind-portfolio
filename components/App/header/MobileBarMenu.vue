<!-- eslint-disable no-console -->
<script lang="ts" setup>
import type { ListData } from '~/types/ui/MobileBarMenu/listData'

// Define props
const props = defineProps<{
  listData: ListData
}>()

const router = useRouter()

const navigateTo = (route: string) => {
  router.push(route)
}

// Define shortcuts based on list items
const shortcuts = props.listData.items.reduce((acc, item) => {
  acc[item.shortcut.toLowerCase()] = () => navigateTo(item.route)
  console.log('acc', acc)
  return acc
}, {} as Record<string, () => void>)

defineShortcuts(shortcuts)
</script>

<template>
  <div class="container flex items-center justify-center px-4">
    <UiList class="max-w ">
      <h4
        class="class=
        text-[17px]
        font-medium
        sm:text-sm"
      >
        {{ props.listData.header }}
      </h4>
      <template
        v-for="item in props.listData.items"
        :key="item.name"
      >
        <UiListItem class="items-center px-4 hover:bg-primary hover:rounded-md">
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
