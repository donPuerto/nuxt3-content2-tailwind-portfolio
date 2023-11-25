<script setup lang="ts">
  const emit = defineEmits(['emitSwitch'])
  const iconClass = ref('pi-bars')

  const handleMenuSwitch = () => {
    iconClass.value = iconClass.value === 'pi-bars' ? 'pi-times' : 'pi-bars'
    emit('emitSwitch', iconClass.value === 'pi-times')
  }
</script>

<template>
  <button
    text
    rounded
    type="button"
    class="border-none bg-transparent transition-all duration-300 ease-in-out transform hover:scale-110"
    @click="handleMenuSwitch"
  >
    <i :class="`dark:text-white pi ${iconClass}`" />
  </button>
</template>
