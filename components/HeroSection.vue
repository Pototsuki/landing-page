<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-10 w-72 h-72 bg-accent-gold/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div class="w-[800px] h-[800px] bg-gradient-to-r from-accent-gold/10 to-accent-blue/10 rounded-full blur-3xl"></div>
      </div>
    </div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-6 text-center">
      <div class="max-w-4xl mx-auto">
        <!-- Badge -->
        <div class="inline-flex items-center px-4 py-2 bg-accent-gold/20 backdrop-blur-sm rounded-full mb-8 animate-fade-in">
          <span class="text-accent-gold text-sm font-semibold">🚀 Program VA Terbaik 2024</span>
        </div>

        <!-- Headline -->
        <h1 class="text-5xl md:text-7xl font-serif font-bold text-white mb-6 animate-slide-up">
          Ubah Keahlian Anda
          <span class="block text-accent-gold">Menjadi Karier Global</span>
          yang Fleksibel
        </h1>

        <!-- Sub-headline -->
        <p class="text-xl md:text-2xl text-primary-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-200">
          Kuasai keterampilan Virtual Assistant profesional dan dapatkan kebebasan bekerja dari mana saja.
          Bergabunglah dengan akademi elit yang menjembatani Anda dengan peluang kerja internasional.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up delay-400">
          <button
            class="px-8 py-4 bg-gradient-to-r from-accent-gold to-accent-blue text-white font-bold text-lg rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent-gold/25"
            @click="handlePrimaryCTA"
          >
            Daftar Kelas Sekarang
          </button>
          <button
            class="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full transform transition-all duration-300 hover:bg-white hover:text-primary-900"
            @click="handleSecondaryCTA"
          >
            Download Kurikulum
          </button>
        </div>

        <!-- Trust Indicators -->
        <div class="flex flex-col md:flex-row items-center justify-center gap-8 text-primary-200 animate-fade-in delay-600">
          <div class="flex items-center gap-2">
            <span class="text-2xl">👥</span>
            <span class="text-sm font-medium">500+ Alumni Berhasil</span>
          </div>
          <div class="hidden md:block w-px h-6 bg-primary-600"></div>
          <div class="flex items-center gap-2">
            <span class="text-2xl">🌍</span>
            <span class="text-sm font-medium">Koneksi Global</span>
          </div>
          <div class="hidden md:block w-px h-6 bg-primary-600"></div>
          <div class="flex items-center gap-2">
            <span class="text-2xl">⭐</span>
            <span class="text-sm font-medium">Rating 4.9/5.0</span>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="absolute top-10 right-10 w-20 h-20 border-l-2 border-t-2 border-accent-gold/30 animate-pulse"></div>
    <div class="absolute bottom-10 left-10 w-32 h-32 border-r-2 border-b-2 border-accent-blue/30 animate-pulse delay-1000"></div>
  </section>
</template>

<script setup>
const handlePrimaryCTA = () => {
  // Redirect to WhatsApp or registration page
  window.open('https://wa.me/628123456789?text=Halo,%20saya%20tertarik%20untuk%20mendaftar%20kelas%20Remote%20For%20Hive', '_blank')
}

const handleSecondaryCTA = () => {
  // Download curriculum or redirect to program details
  alert('Kurikulum akan segera tersedia!')
}
</script>