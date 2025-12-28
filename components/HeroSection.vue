<template>
  <section id="hero" class="min-h-screen flex items-center bg-gradient-cute relative overflow-hidden">
    <!-- Floating decorative elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-20 h-20 bg-pototsuki-pink rounded-full opacity-40 animate-float" />
      <div class="absolute top-40 right-20 w-16 h-16 bg-pototsuki-purple rounded-full opacity-40 animate-float-delayed" />
      <div class="absolute bottom-40 left-1/4 w-24 h-24 bg-pototsuki-mint rounded-full opacity-40 animate-float" />
      <div class="absolute bottom-20 right-1/3 w-12 h-12 bg-pototsuki-yellow rounded-full opacity-40 animate-float-delayed" />
      <div class="absolute top-1/3 right-10 w-14 h-14 bg-pototsuki-blue rounded-full opacity-40 animate-float" />
    </div>

    <div class="section-container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-8 animate-slide-up">
          <div class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft">
            <span class="text-pototsuki-pink-dark">✨</span>
            <span class="text-sm font-medium text-gray-700">Creative Digital Agency</span>
          </div>

          <h1 class="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight">
            <span class="gradient-text">Crafting Digital Spaces</span>
            <br />
            <span class="text-gray-800">That Spark Joy</span>
            <span class="inline-block animate-wiggle">✨</span>
          </h1>

          <p class="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
            Pototsuki Foundation helps small and medium brands stand out with
            <span class="font-semibold text-pototsuki-purple-dark">unique</span>,
            <span class="font-semibold text-pototsuki-pink-dark">creative</span>, and
            <span class="font-semibold text-pototsuki-mint-dark">high-performance</span>
            landing pages. Not just a website, but a personality.
          </p>

          <div class="flex flex-col sm:flex-row items-center gap-4">
            <BaseButton variant="primary" size="lg" @click="scrollToContact">
              <span>Let's Build Something Cute</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </BaseButton>
            <BaseButton variant="secondary" size="lg" tag="a" href="#services">
              View Portfolio
            </BaseButton>
          </div>

          <!-- Trust indicators -->
          <div class="flex items-center gap-6 pt-4">
            <div class="flex items-center gap-2">
              <div class="flex -space-x-2">
                <div class="w-8 h-8 bg-pototsuki-pink rounded-full border-2 border-white flex items-center justify-center text-xs">🌸</div>
                <div class="w-8 h-8 bg-pototsuki-purple rounded-full border-2 border-white flex items-center justify-center text-xs">⭐</div>
                <div class="w-8 h-8 bg-pototsuki-mint rounded-full border-2 border-white flex items-center justify-center text-xs">💖</div>
              </div>
              <span class="text-sm text-gray-600">50+ Happy Clients</span>
            </div>
          </div>
        </div>

        <!-- Right Content - Founder Image -->
        <div class="relative flex justify-center items-center animate-slide-up" style="animation-delay: 0.3s">
          <!-- Decorative circles behind image -->
          <div class="absolute w-96 h-96 bg-gradient-radial from-pototsuki-pink-light/50 to-transparent rounded-full animate-pulse-soft" />
          <div class="absolute w-80 h-80 bg-gradient-radial from-pototsuki-purple-light/50 to-transparent rounded-full animate-pulse-soft" style="animation-delay: 1s" />

          <!-- Image container with unique design -->
          <div class="relative">
            <!-- Rotating decorative ring -->
            <div class="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]">
              <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2">
                <span class="text-3xl">⭐</span>
              </div>
              <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2">
                <span class="text-3xl">🌸</span>
              </div>
              <div class="absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2">
                <span class="text-3xl">💖</span>
              </div>
              <div class="absolute right-0 top-1/2 translate-x-2 -translate-y-1/2">
                <span class="text-3xl">✨</span>
              </div>
            </div>

            <!-- Main image -->
            <div class="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-float border-8 border-white hover:scale-105 transition-transform duration-500">
              <img
                src="/pototsuki.png"
                alt="Pototsuki Founder"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Floating badges -->
            <div class="absolute -top-4 -right-4 bg-white rounded-2xl shadow-soft-lg px-4 py-2 animate-bounce-soft">
              <span class="text-sm font-semibold text-pototsuki-purple-dark">Founder & Creative Director</span>
            </div>

            <div class="absolute -bottom-4 -left-4 bg-gradient-pink rounded-2xl shadow-cute-lg px-4 py-2 animate-bounce-soft" style="animation-delay: 0.5s">
              <span class="text-sm font-semibold text-white">Meet Pototsuki! 🎀</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <a href="#services" class="flex flex-col items-center gap-2 text-gray-500 hover:text-pototsuki-purple-dark transition-colors">
        <span class="text-sm">Scroll to explore</span>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollToContact = () => {
  const element = document.getElementById('contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
