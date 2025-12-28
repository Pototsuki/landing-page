<template>
  <section id="services" class="relative bg-pototsuki-cream-light">
    <!-- Background decorations -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-0 w-64 h-64 bg-pototsuki-pink-light/50 rounded-full blur-3xl" />
      <div class="absolute bottom-1/4 right-0 w-64 h-64 bg-pototsuki-purple-light/50 rounded-full blur-3xl" />
    </div>

    <div class="section-container relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-slide-up">
        <span class="inline-block bg-pototsuki-purple-light text-pototsuki-purple-dark px-4 py-2 rounded-full text-sm font-semibold mb-4">
          Our Services
        </span>
        <h2 class="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-4">
          Choose Your <span class="gradient-text">Perfect Package</span>
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Whether you're just starting out or ready to bloom, we have the perfect solution for your brand.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <!-- The Sprout Package -->
        <div class="relative animate-slide-up" style="animation-delay: 0.2s">
          <BaseCard class="h-full">
            <!-- Icon -->
            <div class="w-20 h-20 bg-gradient-to-br from-pototsuki-mint to-pototsuki-mint-dark rounded-3xl flex items-center justify-center shadow-soft mb-6">
              <span class="text-4xl">🌱</span>
            </div>

            <!-- Content -->
            <h3 class="text-2xl font-poppins font-bold text-gray-800 mb-4">
              The Sprout
            </h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Fast, effective, and beautiful one-page sites for personal brands or startups. Perfect for getting your presence online quickly without compromising on quality.
            </p>

            <!-- Features -->
            <ul class="space-y-3 mb-8">
              <li v-for="feature in sproutFeatures" :key="feature" class="flex items-center gap-3 text-gray-600">
                <span class="w-6 h-6 bg-pototsuki-mint-light rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-pototsuki-mint-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {{ feature }}
              </li>
            </ul>

            <!-- Pricing & CTA -->
            <div class="flex items-center justify-between">
              <div>
                <span class="text-3xl font-bold text-gray-800">5-7</span>
                <span class="text-gray-500 ml-1">days</span>
              </div>
              <BaseButton variant="primary" size="md">
                Get Started
              </BaseButton>
            </div>
          </BaseCard>

          <!-- Popular Badge -->
          <div class="absolute -top-3 -right-3 bg-pototsuki-mint text-pototsuki-mint-dark px-4 py-1 rounded-full text-sm font-semibold shadow-soft animate-bounce-soft">
            Quick Start
          </div>
        </div>

        <!-- The Blossom Package -->
        <div class="relative animate-slide-up" style="animation-delay: 0.4s">
          <BaseCard class="h-full border-2 border-pototsuki-pink-dark">
            <!-- Icon -->
            <div class="w-20 h-20 bg-gradient-to-br from-pototsuki-pink to-pototsuki-pink-dark rounded-3xl flex items-center justify-center shadow-cute mb-6">
              <span class="text-4xl">🌸</span>
            </div>

            <!-- Content -->
            <h3 class="text-2xl font-poppins font-bold text-gray-800 mb-4">
              The Blossom
            </h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Multi-section landing pages with advanced animations and lead generation focus. Ideal for businesses ready to make a big impact.
            </p>

            <!-- Features -->
            <ul class="space-y-3 mb-8">
              <li v-for="feature in blossomFeatures" :key="feature" class="flex items-center gap-3 text-gray-600">
                <span class="w-6 h-6 bg-pototsuki-pink-light rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-pototsuki-pink-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {{ feature }}
              </li>
            </ul>

            <!-- Pricing & CTA -->
            <div class="flex items-center justify-between">
              <div>
                <span class="text-3xl font-bold text-gray-800">2-3</span>
                <span class="text-gray-500 ml-1">weeks</span>
              </div>
              <BaseButton variant="primary" size="md">
                Get Started
              </BaseButton>
            </div>
          </BaseCard>

          <!-- Popular Badge -->
          <div class="absolute -top-3 -right-3 bg-gradient-pink text-white px-4 py-1 rounded-full text-sm font-semibold shadow-cute animate-bounce-soft">
            Most Popular
          </div>
        </div>
      </div>

      <!-- Custom Solution CTA -->
      <div class="mt-16 text-center animate-slide-up" style="animation-delay: 0.6s">
        <p class="text-gray-600 mb-4">
          Need something different? We also offer custom solutions tailored to your unique needs.
        </p>
        <BaseButton variant="outline" size="md">
          Discuss Custom Project
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const sproutFeatures = [
  'Single-page landing design',
  'Responsive & mobile-first',
  'Basic animations',
  'Contact form integration',
  'Fast delivery (5-7 days)',
  '1 revision round included'
]

const blossomFeatures = [
  'Multi-section landing page',
  'Advanced animations & interactions',
  'Lead generation features',
  'CMS integration ready',
  'SEO optimization',
  '3 revision rounds included'
]
</script>
