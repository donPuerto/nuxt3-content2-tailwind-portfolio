<!-- Page Not Found -->
<template>
  <div class="flex h-96 flex-col items-center justify-center">
    <Icon
      aria-labelledby="page-not-found"
      name="fluent-emoji:construction"
      size="10rem"
      class="mb-8"
    />
    <h1
      id="not-found"
      class="mb-6 text-center text-xl font-semibold text-zinc-700 dark:text-zinc-300 sm:text-2xl"
    >
      This page doesn't exist.
    </h1>
    <nuxt-link
      to="/"
      class="focus-visible:global-focus group/hover-effect flex w-24 items-center justify-center rounded-md bg-green-500 py-2 font-semibold text-zinc-800 no-underline duration-150"
    >Go Home</nuxt-link>
  </div>
</template>
