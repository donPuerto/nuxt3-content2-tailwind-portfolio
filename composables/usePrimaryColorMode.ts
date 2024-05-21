import { ref, watch } from 'vue'; // Use Vue 3 Composition API imports

// Define the type for colorMode
type ColorMode = 'light' | 'dark' | 'sepia'; // Adjust this based on your actual color modes

// Assuming useColorMode is imported from a module and may not have the correct type, we will cast it
// If you have control over the useColorMode function, ensure it returns ColorMode

declare function useColorMode(): ColorMode; // This is just a placeholder. Use the actual function signature.

export function usePrimaryColorModeComposable() {
	const colorMode = useColorMode(); // Ensure this is typed correctly as ColorMode

	const primaryColor = ref<string>(colorMode === 'light' ? '#158876' : colorMode === 'dark' ? '#41b38a' : '#433422'); // Default value

	const colorMap: Record<ColorMode, string> = {
		light: '#158876',
		dark: '#41b38a',
		sepia: '#433422',
		// Add other color modes as needed
	};

	// Watch for color mode changes
	watch(() => colorMode, (newMode: ColorMode) => {
		primaryColor.value = colorMap[newMode];
	});

	return {
		primaryColor,
	};
};
