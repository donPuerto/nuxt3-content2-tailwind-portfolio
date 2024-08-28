<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Author } from '~/types/components/blog/author'

type SizeOption = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface Props {
  authors: (Author | undefined)[] // Allow for potentially undefined authors
  size?: SizeOption
}

const props = defineProps<Props>()

const showAllAuthors = ref(false)

const visibleAuthors = computed(() =>
  showAllAuthors.value ? props.authors : props.authors.slice(0, 3),
)

const sizeMap = {
  xs: { avatar: 'h-6 w-6', font: 'text-xs', overlap: '-space-x-2' },
  sm: { avatar: 'h-8 w-8', font: 'text-sm', overlap: '-space-x-3' },
  md: { avatar: 'h-10 w-10', font: 'text-base', overlap: '-space-x-4' },
  lg: { avatar: 'h-12 w-12', font: 'text-lg', overlap: '-space-x-5' },
  xl: { avatar: 'h-14 w-14', font: 'text-xl', overlap: '-space-x-6' },
}

const sizeConfig = computed(() => sizeMap[props.size || 'xs'])

const getInitials = (author: Author | undefined) => {
  if (!author || !author.name) return '?'
  return author.name.split(' ').map(n => n[0]).join('').toUpperCase()
}
</script>

<template>
  <div
    v-if="authors.length > 0"
    class="relative flex items-center"
    @mouseenter="showAllAuthors = true"
    @mouseleave="showAllAuthors = false"
  >
    <TransitionGroup
      name="author-list"
      tag="div"
      :class="['flex items-center', sizeConfig.overlap]"
    >
      <div
        v-for="(author, index) in visibleAuthors"
        :key="author?.slug || index"
      >
        <UiAvatar
          :src="author?.avatar"
          :alt="author?.name"
          :fallback="getInitials(author)"
          :class="[
            sizeConfig.avatar,
            'border',
            'border-border',
            'dark:border-border',
            'hover:border-primary',
            'dark:hover:border-primary',
            'rounded-full',
            'transition-colors',
            'duration-200',
            'ease-in-out',
          ]"
        />
      </div>
    </TransitionGroup>
    <Transition name="fade">
      <UiAvatar
        v-if="authors.length > 3 && !showAllAuthors"
        :fallback="`+${authors.length - 3}`"
        :class="[
          sizeConfig.avatar,
          sizeConfig.font,
          'border',
          'border-border',
          'dark:border-border',
          'flex',
          'items-center',
          'justify-center',
          'bg-background',
          'dark:bg-background',
          'text-foreground',
          'dark:text-foreground',
          'font-semibold',
          'hover:border-primary',
          'dark:hover:border-primary',
          'rounded-full',
          'transition-colors',
          'duration-200',
          'ease-in-out',
          'cursor-pointer',
          '-ml-2',
        ]"
      />
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
