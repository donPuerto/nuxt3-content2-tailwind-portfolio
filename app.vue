<script setup>
const colorMode = useColorMode();

console.log(colorMode);
</script>

<template>
	<div>
		<NuxtLayout>
			<div class="">
				Tailwind
			</div>
			<p class="p-4 pb-2" />
			<h1>Color mode: {{ $colorMode }}</h1>
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
	</div>
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
