<template>
  <div class="relative flex min-h-screen flex-col bg-primary-900">
    <ParticlesBackground />
    <div class="relative z-10 flex min-h-screen flex-col">
      <AppHeaderTopBar />
      <main class="flex-grow">
        <slot></slot>
      </main>
      <AppFooter />
    </div>
  </div>
</template>
