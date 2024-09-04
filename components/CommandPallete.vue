<!-- eslint-disable @stylistic/max-statements-per-line -->
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { menuList } from '~/data'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'close': []
}>()

const inputValue = ref('')
const inputRef = ref<HTMLInputElement | null>(null)

const isOpen = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value),
})

watch(isOpen, (newValue) => {
  if (newValue && inputRef.value) {
    // Focus the input when opened
    setTimeout(() => {
      inputRef.value?.focus()
      inputValue.value = '' // Clear the input when opened
    }, 50)
  }
})

const router = useRouter()

const handleSelect = (route: string) => {
  router.push(route)
  closeCommandPalette()
}

const closeCommandPalette = () => {
  isOpen.value = false
  emit('close')
  inputValue.value = '' // Clear the input when closed
}

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeCommandPalette()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50"
      >
        <div
          class="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <UiCommand
            :model-value="isOpen"
            class="w-full rounded-lg shadow-lg bg-popover"
            @update:model-value="isOpen = $event"
          >
            <div class="flex flex-col w-full">
              <div class="relative">
                <UiCommandInput
                  v-model="inputValue"
                  placeholder="Type a command or search..."
                  class="w-full pr-10"
                />
                <UiButton
                  class="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-muted-foreground hover:text-foreground"
                  variant="ghost"
                  @click="closeCommandPalette"
                >
                  <Icon
                    name="heroicons:x-mark"
                    class="h-5 w-5"
                  />
                </UiButton>
              </div>
            </div>
            <UiCommandList class="p-2">
              <UiScrollArea class="max-h-[200px] w-full">
                <UiCommandEmpty>No results found.</UiCommandEmpty>
                <template
                  v-for="(menu, index) in menuList"
                  :key="index"
                >
                  <UiCommandGroup :heading="menu.header.toUpperCase()">
                    <UiCommandItem
                      v-for="(item, k) in menu.items"
                      :key="k"
                      :text="item.name"
                      :icon="item.icon"
                      :value="item.name"
                      class="flex items-center justify-between py-2 px-3 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-md"
                      @select="
                        $event.preventDefault();
                        handleSelect(item.route);
                      "
                    >
                      <div class="flex items-center">
                        <Icon
                          :name="item.icon"
                          class="mr-2 h-4 w-4"
                        />
                        <span>{{ item.name }}</span>
                      </div>
                      <span class="text-xs font-bold">{{ item.shortcut }}</span>
                    </UiCommandItem>
                  </UiCommandGroup>
                  <UiCommandSeparator class="last:hidden my-2" />
                </template>
              </UiScrollArea>
            </UiCommandList>
          </UiCommand>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* Add any additional styles here */
</style>
