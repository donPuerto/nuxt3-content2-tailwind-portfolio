<script lang="ts" setup>

</script>

<template>
  <div class="flex items-center justify-center">
    <UiList class="max-w px-4">
      <template
        v-for="n in 5"
        :key="n"
      >
        <UiListItem class="items-center px-0 ">
          <Icon
            name="line-md:close-to-menu-transition"
            class="h-4 w-4"
          />
          <UiListContent>
            <UiListTitle :title="`List item #${n}`" />
          </UiListContent>
          <UiButton
            size="icon-sm"
            variant="ghost"
            class="ml-auto shrink-0 self-center rounded-full"
          >
            <UiKbd size="md">
              ⌘P
            </UiKbd>
          </UiButton>
        </UiListItem>
        <UiSeparator class="my-2.5 ml-auto w-[85%] last:hidden" />
      </template>
    </UiList>
  </div>
</template>

<style>

</style>
