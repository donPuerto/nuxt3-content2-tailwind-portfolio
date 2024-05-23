<script setup>
import LoadingIndicator from '@/components/LoadingIndicator.vue';

// const colorMode = useColorMode();

// Initialize the loading indicator with custom settings
const { start, finish } = useLoadingIndicator({
	duration: 2000,
	throttle: 200,
	estimatedProgress: (duration, elapsed) => (2 / Math.PI * 100) * Math.atan(elapsed / duration * 100 / 50),
});

// Use onMounted lifecycle hook to control the loading indicator programmatically
onMounted(() => {
	setTimeout(() => {
		start();
		setTimeout(() => {
			finish();
		}, 2000);
	}, 1000);
});

// console.log(colorMode);
</script>

<template>
	<NuxtLoadingIndicator
		color="#158876"
		error-color="#ff0000"
		:height="5"
	/>
	<NuxtLayout>
		<div class="">
			Tailwind
		</div>
		<p class="p-4 pb-2" />

		<select v-model="$colorMode.preference">
			<option value="system">
				System
			</option>
			<option value="light">
				Light
			</option>
			<option value="dark">
				Dark
			</option>
			<option value="sepia">
				Sepia
			</option>
		</select>

		<NuxtPage />

		<div>Font:</div>
		<div>
			<div class="font-inter-light">
				This is text with the Inter Light font.
			</div>
			<div class="font-inter-regular">
				This is text with the Inter Regular font.
			</div>
			<div class="font-inter-bold">
				This is text with the Inter Bold font.
			</div>
			<div class="font-olupos">
				This is text with the Olupos font.
			</div>
			<div class="font-spacegrotesk-light">
				This is text with the Space Grotesk Light font.
			</div>
			<div class="font-spacegrotesk-regular">
				This is text with the Space Grotesk Regular font.
			</div>
			<div class="font-spacegrotesk-medium">
				This is text with the Space Grotesk Medium font.
			</div>
			<div class="font-spacegrotesk-bold">
				This is text with the Space Grotesk Bold font.
			</div>
		</div>
	</NuxtLayout>
	<LoadingIndicator />
</template>

<style>
.outer {
    /* font-family: 'olupos', sans-serif;
    font-size: 140px; */

    }
.inner {
  /* font-family: 'olupos', sans-serif;
  font-size: 115px; */

}
</style>
