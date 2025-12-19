<template>
  <nav
    class="fixed top-0 w-full z-50 transition-all duration-300"
    :class="[
      scrolled
        ? 'glassmorphism shadow-lg'
        : isOnDarkSection
          ? 'bg-transparent'
          : 'bg-white/80 backdrop-blur-sm'
    ]"
  >
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-2 group">
            <div class="w-10 h-10 rounded-lg bg-gradient-to-r from-accent-gold to-accent-blue flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
              <span class="text-white font-bold text-lg">RFH</span>
            </div>
            <span
              class="text-xl font-bold transition-colors duration-300"
              :class="[
                scrolled || isOnDarkSection
                  ? 'text-white'
                  : 'text-primary-900'
              ]"
            >
              Remote For Hive
            </span>
          </NuxtLink>
        </div>

        <!-- Navigation Links (Desktop) -->
        <div class="hidden md:flex items-center space-x-8">
          <button
            @click="scrollToSection('hero')"
            class="transition-colors duration-300 hover:text-accent-gold"
            :class="[
              scrolled || isOnDarkSection
                ? 'text-white'
                : 'text-primary-700'
            ]"
          >
            Beranda
          </button>
          <button
            @click="scrollToSection('programs')"
            class="transition-colors duration-300 hover:text-accent-gold"
            :class="[
              scrolled || isOnDarkSection
                ? 'text-white'
                : 'text-primary-700'
            ]"
          >
            Program
          </button>
          <button
            @click="scrollToSection('faq')"
            class="transition-colors duration-300 hover:text-accent-gold"
            :class="[
              scrolled || isOnDarkSection
                ? 'text-white'
                : 'text-primary-700'
            ]"
          >
            FAQ
          </button>
        </div>

        <!-- CTA Button -->
        <button
          class="px-6 py-2 bg-gradient-to-r from-accent-gold to-accent-blue text-white font-semibold rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          @click="handleCTAClick"
        >
          Daftar Sekarang
        </button>

        <!-- Mobile Menu Toggle -->
        <button
          class="md:hidden text-2xl"
          :class="[
            scrolled || isOnDarkSection
              ? 'text-white'
              : 'text-primary-900'
          ]"
          @click="toggleMobileMenu"
        >
          <span v-if="!mobileMenuOpen">☰</span>
          <span v-else>✕</span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4">
        <div class="flex flex-col space-y-4">
          <button
            @click="scrollToSectionMobile('hero')"
            class="transition-colors duration-300 hover:text-accent-gold text-left"
            :class="[
              scrolled || isOnDarkSection
                ? 'text-white'
                : 'text-primary-700'
            ]"
          >
            Beranda
          </button>
          <button
            @click="scrollToSectionMobile('programs')"
            class="transition-colors duration-300 hover:text-accent-gold text-left"
            :class="[
              scrolled || isOnDarkSection
                ? 'text-white'
                : 'text-primary-700'
            ]"
          >
            Program
          </button>
          <button
            @click="scrollToSectionMobile('faq')"
            class="transition-colors duration-300 hover:text-accent-gold text-left"
            :class="[
              scrolled || isOnDarkSection
                ? 'text-white'
                : 'text-primary-700'
            ]"
          >
            FAQ
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const { scrollToSection } = useSmoothScroll()

const scrolled = ref(false)
const isOnDarkSection = ref(true)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50

  // Check if we're on dark sections
  const heroSection = document.getElementById('hero')
  if (heroSection) {
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
    isOnDarkSection.value = window.scrollY < heroBottom
  }
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const scrollToSectionMobile = (sectionId) => {
  scrollToSection(sectionId)
  closeMobileMenu()
}

const handleCTAClick = () => {
  // Redirect to WhatsApp or registration page
  window.open('https://wa.me/628123456789?text=Halo,%20saya%20tertarik%20untuk%20mendaftar%20kelas%20Remote%20For%20Hive', '_blank')
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>