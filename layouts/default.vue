<template>
  <div class="flex flex-col min-h-screen bg-background text-foreground">
    <ParticlesBackground class="fixed inset-0 pointer-events-none" />
    <div class="relative z-10 flex flex-col min-h-screen">
      <AppHeaderTopBar />
      <main class="flex-grow flex flex-col">
        <slot />
      </main>
      <AppFooter />
    </div>
  </div>
</template>
