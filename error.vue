<script setup lang="ts">
  const props = defineProps({
    error: {
      type: Object,
      default: null // or default: {}
    }
  })

  const handleError = () => {
    clearError({
      redirect: '/'
    })
  }
</script>

<template>
  <div>
    <NuxtLayout>
      <div class="container mx-auto md:pt-8 pt-4 min-h-[50vh]">
        <div class="container flex flex-col place-content-center min-h-[400px] mx-auto">
          <div class="text-center align-middle leading-[2] text-white md:text-4xl text-3xl">
            Oops.. it looks like something broke
          </div>
          <div class="text-center align-middle text-white text-2xl mt-6">
            {{ props.error?.message }}
          </div>
          <UButton
            size="xl"
            class="mx-auto my-7"
            @click="handleError"
            >Return Home</UButton
          >
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
