<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-grow pt-20">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// Default layout for all pages
</script>
