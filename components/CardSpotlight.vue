<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue';

const divRef = ref<HTMLDivElement | null>(null);
const isFocused = ref(false);
const position = reactive({ x: 0, y: 0 });
const opacity = ref(0);
const rotate = ref({ x: 0, y: 0 });

function throttle<T extends(...args: any[]) => any>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}

const handleMouseMove = (e: MouseEvent) => {
  if (!divRef.value || isFocused.value) return;

  const div = divRef.value;
  const rect = div.getBoundingClientRect();

  position.x = e.clientX - rect.left;
  position.y = e.clientY - rect.top;

  // Increase tilt effect
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  rotate.value.x = (position.y - centerY) / 5; // Increased from 10 to 5
  rotate.value.y = (centerX - position.x) / 5; // Increased from 10 to 5
};

const handleFocus = () => {
  isFocused.value = true;
  opacity.value = 1;
};

const handleBlur = () => {
  isFocused.value = false;
  opacity.value = 0;
};

const handleMouseEnter = () => {
  opacity.value = 1;
};

const handleMouseLeave = () => {
  opacity.value = 0;
  rotate.value = { x: 0, y: 0 };
};

onMounted(() => {
  divRef.value?.addEventListener('mousemove', throttle(handleMouseMove, 100));
});

onUnmounted(() => {
  divRef.value?.removeEventListener('mousemove', throttle(handleMouseMove, 100));
});
</script>

<template>
  <div
    ref="divRef"
    class="relative flex items-center justify-center overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-r from-black to-gray-950 shadow-2xl w-full h-full transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform"
    :style="{
      transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
      transition: 'all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s',
    }"
    @focus="handleFocus"
    @blur="handleBlur"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div
      class="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
      :style="{
        opacity: opacity,
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
      }"
    />
    <p class="text-sm text-gray-200 text-center p-2">
      <slot>Card Content</slot>
    </p>
  </div>
</template>
