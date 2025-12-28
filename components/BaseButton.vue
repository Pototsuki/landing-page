<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    class="inline-flex items-center justify-center gap-2 transition-all duration-300"
    :class="variantClasses"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  tag?: string
  to?: string
  href?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  tag: 'button'
})

const variantClasses = computed(() => {
  const variants = {
    primary: 'bg-gradient-pink text-white shadow-cute hover:shadow-cute-lg hover:scale-105',
    secondary: 'bg-white text-pototsuki-purple-dark shadow-soft hover:shadow-soft-lg hover:scale-105 border-2 border-pototsuki-purple',
    outline: 'bg-transparent text-pototsuki-purple-dark border-2 border-pototsuki-purple hover:bg-pototsuki-purple-light',
    ghost: 'bg-transparent text-pototsuki-purple-dark hover:bg-pototsuki-purple-light'
  }

  const sizes = {
    sm: 'px-4 py-2 rounded-xl text-sm font-medium',
    md: 'px-8 py-4 rounded-3xl font-semibold',
    lg: 'px-10 py-5 rounded-3xl font-semibold text-lg'
  }

  return `${variants[props.variant]} ${sizes[props.size]}`
})
</script>
