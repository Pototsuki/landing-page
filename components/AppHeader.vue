<template>
  <header class="fixed top-0 left-0 right-0 z-50 glass transition-all duration-300" :class="scrolled ? 'shadow-soft' : ''">
    <nav class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div class="w-12 h-12 bg-gradient-pink rounded-2xl flex items-center justify-center shadow-cute group-hover:scale-110 transition-transform duration-300">
            <span class="text-2xl">🌸</span>
          </div>
          <span class="font-poppins font-bold text-xl text-gray-800">Pototsuki</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <a v-for="item in navItems" :key="item.name" :href="item.href" class="text-gray-600 hover:text-pototsuki-purple-dark font-medium transition-colors duration-300 relative group">
            {{ item.name }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-pototsuki-pink-dark group-hover:w-full transition-all duration-300" />
          </a>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <BaseButton variant="primary" size="sm" @click="scrollToContact">
            Get Started
          </BaseButton>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden p-2 rounded-xl hover:bg-pototsuki-purple-light transition-colors" @click="mobileMenuOpen = !mobileMenuOpen">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition-all duration-300"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-300"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-show="mobileMenuOpen" class="md:hidden mt-4 pt-4 border-t border-pototsuki-purple-light">
          <div class="flex flex-col gap-4">
            <a v-for="item in navItems" :key="item.name" :href="item.href" class="text-gray-600 hover:text-pototsuki-purple-dark font-medium transition-colors py-2" @click="mobileMenuOpen = false">
              {{ item.name }}
            </a>
            <BaseButton variant="primary" size="sm" class="w-full" @click="scrollToContact">
              Get Started
            </BaseButton>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'Services', href: '#services' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' }
]

const scrollToContact = () => {
  const element = document.getElementById('contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  const handleScroll = () => {
    scrolled.value = window.scrollY > 20
  }
  window.addEventListener('scroll', handleScroll)
})
</script>
