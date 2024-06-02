<template>
	<button
		class="p-2 rounded-full focus:outline-none"
		@click="toggleTheme"
	>
		<component :is="currentIcon" />
	</button>
</template>

<script lang="ts" setup>
// Import the component files
const LightThemeIcon = resolveComponent('LightThemeIcon');
const DarkThemeIcon = resolveComponent('DarkThemeIcon');
const SepiaThemeIcon = resolveComponent('SepiaThemeIcon');

const colorMode = useColorMode();

// Define the available color modes as string literals
type Theme = 'light' | 'dark' | 'sepia';

// Function to resolve component based on theme
const selectedTheme = (theme: Theme) => {
	switch (theme) {
		case 'light':
			return LightThemeIcon;
		case 'dark':
			return DarkThemeIcon;
		case 'sepia':
			return SepiaThemeIcon;
		default:
			return LightThemeIcon;
	}
};

// Computed property to determine the current icon
const currentIcon = computed(() => {
	const currentMode = colorMode.value as Theme;
	return selectedTheme(currentMode);
});

// Initialize the theme from local storage on mount
onMounted(() => {
	toggleTheme();
});

// Function to toggle the theme
const toggleTheme = () => {
	const themes: Theme[] = ['light', 'dark', 'sepia'];
	const currentIndex = themes.indexOf(colorMode.value as Theme);
	const nextIndex = (currentIndex + 1) % themes.length;
	const nextTheme = themes[nextIndex];

	// Update colorMode value and LocalStorage
	colorMode.value = nextTheme;
	localStorage.setItem('nuxt-color-mode', nextTheme);
};
</script>

<style>

</style>
