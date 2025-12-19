<template>
  <footer class="bg-primary-900 text-white">
    <div class="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <!-- Footer Content -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
        <!-- Brand Section -->
        <div class="lg:col-span-1">
          <div class="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
            <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-accent-gold to-accent-blue flex items-center justify-center">
              <span class="text-white font-bold text-sm sm:text-lg">RFH</span>
            </div>
            <span class="text-lg sm:text-xl font-bold">Remote For Hive</span>
          </div>
          <p class="text-primary-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
            Akademi elit untuk Virtual Assistant profesional yang menghubungkan talenta Indonesia dengan peluang karier global.
          </p>
          <!-- Social Media -->
          <div class="flex space-x-3 sm:space-x-4">
            <a
              href="#"
              class="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-gold hover:scale-110 transition-all duration-300"
              aria-label="Instagram"
            >
              <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998z"/>
                <circle cx="18.406" cy="5.594" r="1.44"/>
              </svg>
            </a>
            <a
              href="#"
              class="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-gold hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="#"
              class="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-gold hover:scale-110 transition-all duration-300"
              aria-label="YouTube"
            >
              <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-accent-gold">Quick Links</h3>
          <ul class="space-y-2 sm:space-y-3">
            <li>
              <a href="#hero" class="text-primary-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                Beranda
              </a>
            </li>
            <li>
              <a href="#programs" class="text-primary-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                Program
              </a>
            </li>
            <li>
              <a href="#faq" class="text-primary-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" class="text-primary-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                Testimoni Alumni
              </a>
            </li>
            <li>
              <a href="#" class="text-primary-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <!-- Programs -->
        <div>
          <h3 class="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-accent-gold">Program</h3>
          <ul class="space-y-2 sm:space-y-3">
            <li>
              <a href="#" class="text-primary-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                Kelas Online
              </a>
            </li>
            <li>
              <a href="#" class="text-primary-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                Bootcamp Offline
              </a>
            </li>
            <li>
              <a href="#" class="text-primary-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                Private Mentoring
              </a>
            </li>
            <li>
              <a href="#" class="text-primary-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                Corporate Training
              </a>
            </li>
            <li>
              <a href="#" class="text-primary-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                Workshop
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-accent-gold">Kontak</h3>
          <div class="space-y-3 sm:space-y-4">
            <div class="flex items-start gap-2 sm:gap-3">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 text-accent-gold mt-0.5 sm:mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <div>
                <p class="text-primary-300 text-xs sm:text-sm">Email</p>
                <a href="mailto:info@remoteforhive.com" class="text-white hover:text-accent-gold transition-colors duration-300 text-xs sm:text-sm">
                  info@remoteforhive.com
                </a>
              </div>
            </div>
            <div class="flex items-start gap-2 sm:gap-3">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 text-accent-gold mt-0.5 sm:mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <div>
                <p class="text-primary-300 text-xs sm:text-sm">WhatsApp</p>
                <a href="https://wa.me/628123456789" class="text-white hover:text-accent-gold transition-colors duration-300 text-xs sm:text-sm">
                  +62 812-3456-789
                </a>
              </div>
            </div>
            <div class="flex items-start gap-2 sm:gap-3">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 text-accent-gold mt-0.5 sm:mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
              </svg>
              <div>
                <p class="text-primary-300 text-xs sm:text-sm">Alamat Offline</p>
                <p class="text-white text-xs sm:text-sm">Jakarta Selatan, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Newsletter -->
      <div class="border-t border-primary-700 pt-6 sm:pt-8 mb-6 sm:mb-8">
        <div class="max-w-2xl mx-auto text-center">
          <h3 class="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Dapatkan Tips Karier Remote</h3>
          <p class="text-primary-300 mb-4 sm:mb-6 text-sm sm:text-base px-4">Subscribe newsletter kami untuk mendapatkan insight terbaru tentang industri VA</p>
          <form class="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto px-4">
            <input
              type="email"
              placeholder="Email Anda"
              class="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent text-sm"
              required
            />
            <button
              type="submit"
              class="px-4 sm:px-6 py-3 bg-gradient-to-r from-accent-gold to-accent-blue text-white font-semibold rounded-lg hover:shadow-lg transform transition-all duration-300 hover:scale-105 text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-primary-700 pt-4 sm:pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-primary-400 text-xs sm:text-sm">
            © 2024 Remote For Hive. All rights reserved.
          </p>
          <div class="flex space-x-4 sm:space-x-6">
            <a href="#" class="text-primary-400 hover:text-white text-xs sm:text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" class="text-primary-400 hover:text-white text-xs sm:text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" class="text-primary-400 hover:text-white text-xs sm:text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component logic if needed
</script>