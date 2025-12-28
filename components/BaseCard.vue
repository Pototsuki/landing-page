<template>
  <div
    class="card-cute group relative overflow-hidden"
    :class="hoverable ? 'hover:scale-105 cursor-pointer' : ''"
  >
    <!-- Decorative background elements -->
    <div class="absolute top-0 right-0 w-32 h-32 bg-pototsuki-pink-light rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:scale-150 transition-transform duration-500" />
    <div class="absolute bottom-0 left-0 w-24 h-24 bg-pototsuki-purple-light rounded-full translate-y-1/2 -translate-x-1/2 opacity-50 group-hover:scale-125 transition-transform duration-500" />

    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  hoverable?: boolean
}

withDefaults(defineProps<Props>(), {
  hoverable: true
})
</script>
