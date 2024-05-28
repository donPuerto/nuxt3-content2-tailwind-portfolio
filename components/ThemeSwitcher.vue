<template>
	<button
		class="p-2 rounded-full focus:outline-none"
		@click="toggleTheme"
	>
		<component
			:is="currentIcon"
			class="w-6 h-6"
		/>
	</button>
</template>

<script lang="ts" setup>
import DarkTheme from '@/components/Icons/ThemeIcons/DarkTheme.vue';
import LightTheme from '@/components/Icons/ThemeIcons/LightTheme.vue';
import SepiaTheme from '@/components/Icons/ThemeIcons/SeptiaTheme.vue';

const colorMode = useColorMode();
const themes = ['light', 'dark', 'sepia'] as const;
type Theme = (typeof themes)[number];
// console.log('ColorMode', colorMode.value);
const currentIcon = computed(() => {
	switch (colorMode.value) {
		case 'light':
			return LightTheme;
		case 'dark':
			return DarkTheme;
		case 'sepia':
			return SepiaTheme;
		default:
			return LightTheme;
	}
});

const toggleTheme = () => {
	const currentIndex = themes.indexOf(colorMode.value as Theme);
	const nextIndex = (currentIndex + 1) % themes.length;
	colorMode.value = themes[nextIndex];
};
</script>

<style>

</style>
