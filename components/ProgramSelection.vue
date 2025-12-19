<template>
  <section id="programs" class="py-16 sm:py-20 lg:py-24 bg-primary-50">
    <div class="container mx-auto px-4 sm:px-6">
      <!-- Section Header -->
      <div class="text-center mb-12 sm:mb-16 lg:mb-20">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-900 mb-4 sm:mb-6">
          Pilih Jalur Belajar Anda
        </h2>
        <p class="text-base sm:text-lg md:text-xl text-primary-600 max-w-3xl mx-auto px-4">
          Pilih program yang paling sesuai dengan gaya hidup dan tujuan karier Anda
        </p>
      </div>

      <!-- Program Cards -->
      <div class="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
        <!-- Online Class Card -->
        <div class="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <!-- Gradient Border Effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <!-- Content -->
          <div class="relative bg-white rounded-2xl p-6 sm:p-8 m-1">
            <!-- Icon -->
            <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent-blue to-blue-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 transform transition-transform duration-300 group-hover:rotate-6">
              <svg class="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>

            <!-- Title & Badge -->
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
              <h3 class="text-xl sm:text-2xl font-bold text-primary-900">Online Class</h3>
              <span class="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full w-fit">Fleksibel</span>
            </div>

            <!-- Description -->
            <p class="text-primary-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Belajar tanpa batas ruang dengan sesi interaktif dan akses komunitas digital seumur hidup.
            </p>

            <!-- Features -->
            <ul class="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
              <li class="flex items-start gap-2 sm:gap-3">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 sm:mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-primary-700 text-sm sm:text-base">Sesi live mingguan via Zoom</span>
              </li>
              <li class="flex items-start gap-2 sm:gap-3">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 sm:mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-primary-700 text-sm sm:text-base">Akses rekaman selamanya</span>
              </li>
              <li class="flex items-start gap-2 sm:gap-3">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 sm:mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-primary-700 text-sm sm:text-base">Komunitas Discord eksklusif</span>
              </li>
              <li class="flex items-start gap-2 sm:gap-3">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 sm:mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-primary-700 text-sm sm:text-base">1-on-1 mentoring bulanan</span>
              </li>
            </ul>

            <!-- Price -->
            <div class="border-t pt-4 sm:pt-6 mb-4 sm:mb-6">
              <div class="flex items-baseline gap-2">
                <span class="text-2xl sm:text-3xl font-bold text-primary-900">Rp 2.5jt</span>
                <span class="text-primary-500 text-sm sm:text-base">/bulan</span>
              </div>
            </div>

            <!-- CTA Button -->
            <button
              class="w-full py-3 sm:py-4 bg-gradient-to-r from-accent-blue to-blue-600 text-white font-bold rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base"
              @click="handleOnlineClassCTA"
            >
              Daftar Kelas Online
            </button>
          </div>
        </div>

        <!-- Offline Bootcamp Card -->
        <div class="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <!-- Gradient Border Effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-accent-gold to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <!-- Content -->
          <div class="relative bg-white rounded-2xl p-6 sm:p-8 m-1">
            <!-- Icon -->
            <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent-gold to-orange-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 transform transition-transform duration-300 group-hover:rotate-6">
              <svg class="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>

            <!-- Title & Badge -->
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
              <h3 class="text-xl sm:text-2xl font-bold text-primary-900">Offline Bootcamp</h3>
              <span class="px-3 py-1 bg-accent-gold/20 text-accent-gold text-sm font-semibold rounded-full w-fit">Intensif</span>
            </div>

            <!-- Description -->
            <p class="text-primary-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Pengalaman belajar tatap muka yang eksklusif dengan bimbingan langsung di lokasi premium.
            </p>

            <!-- Features -->
            <ul class="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
              <li class="flex items-start gap-2 sm:gap-3">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-accent-gold mt-0.5 sm:mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-primary-700 text-sm sm:text-base">Bootcamp 3 minggu intensif</span>
              </li>
              <li class="flex items-start gap-2 sm:gap-3">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-accent-gold mt-0.5 sm:mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-primary-700 text-sm sm:text-base">Kelas di lokasi premium Jakarta</span>
              </li>
              <li class="flex items-start gap-2 sm:gap-3">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-accent-gold mt-0.5 sm:mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-primary-700 text-sm sm:text-base">Mentoring harian dengan expert</span>
              </li>
              <li class="flex items-start gap-2 sm:gap-3">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-accent-gold mt-0.5 sm:mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-primary-700 text-sm sm:text-base">Sertifikat & job placement</span>
              </li>
            </ul>

            <!-- Price -->
            <div class="border-t pt-4 sm:pt-6 mb-4 sm:mb-6">
              <div class="flex items-baseline gap-2">
                <span class="text-2xl sm:text-3xl font-bold text-primary-900">Rp 15jt</span>
                <span class="text-primary-500 text-sm sm:text-base">/program</span>
              </div>
            </div>

            <!-- CTA Button -->
            <button
              class="w-full py-3 sm:py-4 bg-gradient-to-r from-accent-gold to-orange-600 text-white font-bold rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base"
              @click="handleOfflineBootcampCTA"
            >
              Daftar Bootcamp Offline
            </button>
          </div>
        </div>
      </div>

      <!-- Trust Badges -->
      <div class="text-center mt-12 sm:mt-16">
        <p class="text-primary-500 mb-4 sm:mb-6 text-sm sm:text-base">Program kami telah dipercaya oleh:</p>
        <div class="flex flex-wrap justify-center items-center gap-6 sm:gap-8 opacity-60">
          <div class="text-lg sm:text-2xl font-bold text-primary-400">Tech Corp</div>
          <div class="text-lg sm:text-2xl font-bold text-primary-400">StartupHub</div>
          <div class="text-lg sm:text-2xl font-bold text-primary-400">GlobalVA</div>
          <div class="text-lg sm:text-2xl font-bold text-primary-400">RemoteFirst</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const handleOnlineClassCTA = () => {
  window.open('https://wa.me/628123456789?text=Halo,%20saya%20tertarik%20kelas%20Online%20Remote%20For%20Hive', '_blank')
}

const handleOfflineBootcampCTA = () => {
  window.open('https://wa.me/628123456789?text=Halo,%20saya%20tertarik%20Bootcamp%20Offline%20Remote%20For%20Hive', '_blank')
}
</script>