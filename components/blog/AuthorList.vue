<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Author } from '~/types/components/blog/author'

type SizeOption = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface Props {
  authors: Author[]
  size?: SizeOption
}

const props = defineProps<Props>()

const showAllAuthors = ref(false)

const visibleAuthors = computed(() =>
  showAllAuthors.value ? props.authors : props.authors.slice(0, 3),
)

const sizeMap = {
  xs: { avatar: 18, font: 9, spacing: 1 },
  sm: { avatar: 20, font: 10, spacing: 2 },
  md: { avatar: 24, font: 12, spacing: 2 },
  lg: { avatar: 28, font: 14, spacing: 3 },
  xl: { avatar: 32, font: 16, spacing: 3 },
}

const sizeConfig = computed(() => sizeMap[props.size || 'xs'])

const avatarSizeClass = computed(() => `h-[${sizeConfig.value.avatar}px] w-[${sizeConfig.value.avatar}px]`)
const fontSizeStyle = computed(() => `font-size: ${sizeConfig.value.font}px;`)
const negativeMarginClass = computed(() => `-mr-${sizeConfig.value.spacing}`)
</script>

<template>
  <div
    v-if="authors.length > 0"
    class="relative flex overflow-hidden"
    @mouseenter="showAllAuthors = true"
    @mouseleave="showAllAuthors = false"
  >
    <TransitionGroup
      name="author-list"
      tag="div"
      class="flex"
      :class="negativeMarginClass"
    >
      <div
        v-for="(author, index) in visibleAuthors"
        :key="author.slug || index"
        class="flex justify-end"
      >
        <div class="flex justify-end">
          <UiAvatar
            v-if="author.avatar"
            :src="author.avatar"
            :alt="author.name"
            :class="[
              avatarSizeClass,
              'border-2',
              'border-white',
              'dark:border-gray-800',
              'hover:border-primary',
              'dark:hover:border-primary',
              'rounded-full',
              'transition-colors',
              'duration-200',
              'ease-in-out',
            ]"
          />

          <div
            v-else
            :class="[
              avatarSizeClass,
              'border-2',
              'border-white',
              'dark:border-gray-800',
              'rounded-full',
              'bg-primary',
              'flex',
              'items-center',
              'justify-center',
              'text-white',
              'font-semibold',
            ]"
            :style="fontSizeStyle"
          >
            {{ author.name.charAt(0) }}
          </div>
        </div>
      </div>
    </TransitionGroup>
    <Transition name="fade">
      <span
        v-if="authors.length > 3 && !showAllAuthors"
        :class="[
          avatarSizeClass,
          'absolute',
          'right-0',
          'flex',
          'items-center',
          'justify-center',
          'bg-white',
          'dark:bg-gray-800',
          'text-gray-800',
          'dark:text-white',
          'font-semibold',
          'border-2',
          'border-gray-200',
          'dark:border-gray-700',
          'hover:border-primary',
          'dark:hover:border-primary',
          'rounded-full',
          'transition-colors',
          'duration-200',
          'ease-in-out',
          'z-20',
          'cursor-pointer',
        ]"
        :style="fontSizeStyle"
      >
        +{{ authors.length - 3 }}
      </span>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
