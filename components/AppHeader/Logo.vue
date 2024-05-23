<script setup>
const isActive = ref(false);

onMounted(() => {
	isActive.value = true;
});
</script>

<template>
	<NuxtLink
		to="/"
		class="flex items-center space-x-3 text-gray-50 hover:text-gray-400 duration-100"
	>
		<div class="logo-container">
			<svg
				width="200"
				height="200"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 200 200"
				class="logo-svg"
			>
				<!-- Linear gradient definition for the border -->
				<defs>
					<linearGradient
						id="gradient-border"
						x1="0%"
						y1="0%"
						x2="100%"
						y2="100%"
					>
						<stop
							offset="0%"
							:style="{ stopColor: 'var(--color-primary)' }"
						/>
						<stop
							offset="100%"
							:style="{ stopColor: 'var(--color-secondary)' }"
						/>
					</linearGradient>

					<!-- Filter definition for the text shadow -->
					<filter
						id="text-shadow"
						x="-50%"
						y="-50%"
						width="200%"
						height="200%"
					>
						<feDropShadow
							dx="2"
							dy="2"
							stdDeviation="2"
							flood-color="rgba(0, 0, 0, 0.5)"
						/>
					</filter>
				</defs>

				<circle
					cx="100"
					cy="100"
					r="96"
					:fill="`var(--bg)`"
					stroke="url(#gradient-border)"
					stroke-width="4"
					class="animate-gradient-border"
				/>

				<text
					x="72"
					y="85"
					:class="['outer', { 'scale-enter': !isActive, 'scale-enter-active': isActive }]"
					:fill="`var(--color)`"
					text-anchor="middle"
					alignment-baseline="middle"
					transform="rotate(-300, 100,100)"
					filter="url(#text-shadow)"
				>d</text>

				<text
					x="128"
					y="95"
					:class="['inner', { 'scale-enter': !isActive, 'scale-enter-active': isActive }]"
					:fill="`var(--color)`"
					text-anchor="middle"
					alignment-baseline="middle"
					transform="rotate(-275, 100,100)"
					filter="url(#text-shadow)"
				>p</text>
			</svg>
		</div>

		<span class="text-1xl spacegrotesk-regular">donpuerto</span>
	</NuxtLink>
</template>

<style scoped>
.outer {
  font-family: 'olupos', sans-serif;
  font-size: 110px;
}
.inner {
  font-family: 'olupos', sans-serif;
  font-size: 90px;
}

/* Custom animation keyframes for gradient border */
@keyframes gradient-border {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 600; /* Adjusted for circle */
  }
}

/* Tailwind classes for the gradient border animation */
.animate-gradient-border {
  stroke-dasharray: 300; /* Adjusted for circle */
  animation: gradient-border 5s linear infinite;
}

/* Logo container to control overall size */
.logo-container {
  width: 40px;  /* Adjust width as needed */
  height: 40px; /* Adjust height as needed */
  display: flex;
  align-items: center;
}

/* Make SVG responsive */
.logo-svg {
  width: 100%;
  height: 100%;
  display: block;
}

/* .spacegrotesk-regular {
  font-family: 'SpaceGrotesk-Regular', sans-serif;
} */
</style>
