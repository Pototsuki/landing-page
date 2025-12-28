<template>
  <footer class="bg-gradient-to-br from-pototsuki-purple-light via-pototsuki-pink-light to-pototsuki-mint-light">
    <div class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Brand -->
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-soft">
              <span class="text-2xl">🌸</span>
            </div>
            <span class="font-poppins font-bold text-xl text-gray-800">Pototsuki Foundation</span>
          </div>
          <p class="text-gray-600 leading-relaxed">
            Crafting digital spaces that spark joy. We help small and medium brands stand out with unique, creative, and high-performance landing pages.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-poppins font-semibold text-lg text-gray-800 mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.name">
              <a :href="link.href" class="text-gray-600 hover:text-pototsuki-purple-dark transition-colors duration-300 flex items-center gap-2">
                <span class="text-pototsuki-pink-dark">✦</span>
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="font-poppins font-semibold text-lg text-gray-800 mb-4">Our Services</h4>
          <ul class="space-y-2">
            <li v-for="service in services" :key="service.name">
              <span class="text-gray-600 flex items-center gap-2">
                <span class="text-pototsuki-purple-dark">✦</span>
                {{ service.name }}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div class="mt-12 pt-8 border-t border-white/50">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-gray-600 text-sm">
            © 2025 Pototsuki Foundation. All rights reserved. Made with 💖
          </p>
          <div class="flex items-center gap-4">
            <a v-for="social in socials" :key="social.name" :href="social.href" class="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-soft hover:scale-110 hover:shadow-cute transition-all duration-300">
              <span class="text-lg">{{ social.icon }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const quickLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Services', href: '#services' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' }
]

const services = [
  { name: 'The Sprout Package' },
  { name: 'The Blossom Package' },
  { name: 'Custom Solutions' }
]

const socials = [
  { name: 'Twitter', icon: '🐦', href: '#' },
  { name: 'Instagram', icon: '📸', href: '#' },
  { name: 'Dribbble', icon: '🎨', href: '#' },
  { name: 'Email', icon: '✉️', href: 'mailto:pototsukifoundation@gmail.com' }
]
</script>
