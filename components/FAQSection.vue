<template>
  <section id="faq" class="py-24 bg-gradient-to-br from-primary-900 to-primary-800">
    <div class="container mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <h2 class="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
          Frequently Asked Questions
        </h2>
        <p class="text-xl text-primary-200 max-w-3xl mx-auto">
          Temukan jawaban untuk pertanyaan yang sering diajukan tentang program kami
        </p>
      </div>

      <!-- FAQ Accordion -->
      <div class="max-w-4xl mx-auto">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="mb-4"
        >
          <button
            class="w-full text-left bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 transition-all duration-300 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-accent-gold"
            @click="toggleFAQ(index)"
          >
            <div class="flex items-center justify-between">
              <h3 class="text-lg md:text-xl font-semibold text-white pr-4">
                {{ faq.question }}
              </h3>
              <div class="flex-shrink-0">
                <svg
                  class="w-6 h-6 text-accent-gold transform transition-transform duration-300"
                  :class="{ 'rotate-180': faq.isOpen }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </button>

          <div
            class="overflow-hidden transition-all duration-300"
            :class="faq.isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
          >
            <div class="bg-white/5 backdrop-blur-sm border-l-4 border-accent-gold rounded-b-xl p-6 mt-2">
              <div class="text-primary-200 leading-relaxed" v-html="faq.answer"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Still Have Questions -->
      <div class="text-center mt-16">
        <div class="inline-flex flex-col items-center p-8 bg-gradient-to-r from-accent-gold/20 to-accent-blue/20 backdrop-blur-sm rounded-2xl border border-white/20">
          <h3 class="text-2xl font-bold text-white mb-4">Masih memiliki pertanyaan?</h3>
          <p class="text-primary-200 mb-6">Tim kami siap membantu Anda menemukan program yang tepat</p>
          <button
            class="px-8 py-4 bg-gradient-to-r from-accent-gold to-accent-blue text-white font-bold rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent-gold/25"
            @click="handleContactCTA"
          >
            Hubungi Kami via WhatsApp
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const faqs = ref([
  {
    question: 'Apa perbedaan utama antara kelas Online dan Offline?',
    answer: `
      <div class="space-y-3">
        <p><strong>Kelas Online:</strong> Dirancang untuk fleksibilitas belajar dari mana saja via sesi interaktif. Cocok untuk Anda yang memiliki jadwal padat atau berada di luar Jakarta.</p>
        <p><strong>Kelas Offline:</strong> Program bootcamp tatap muka yang berfokus pada bimbingan langsung dan networking yang lebih intim. Ideal untuk pembelajaran intensif dengan interaksi real-time.</p>
      </div>
    `,
    isOpen: false
  },
  {
    question: 'Apakah saya harus memiliki pengalaman kerja kantoran sebelumnya?',
    answer: `
      <div class="space-y-3">
        <p>Tidak perlu. Kami membimbing Anda dari <strong>level dasar hingga mahir</strong>, termasuk:</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>Pengenalan ekosistem kerja remote global</li>
          <li> Fundamental komunikasi profesional internasional</li>
          <li>Tools dan teknologi yang wajib dikuasai</li>
          <li>Portfolio building dan personal branding</li>
        </ul>
      </div>
    `,
    isOpen: false
  },
  {
    question: 'Keterampilan teknis apa saja yang akan saya pelajari?',
    answer: `
      <div class="space-y-3">
        <p>Anda akan menguasai <strong>keterampilan VA yang komprehensif</strong>:</p>
        <div class="grid md:grid-cols-2 gap-4 mt-4">
          <div>
            <h4 class="font-semibold text-accent-gold mb-2">📋 Project Management:</h4>
            <ul class="text-sm space-y-1">
              <li>• Notion & Trello mastery</li>
              <li>• Asana & Monday.com</li>
              <li>• Timeline management</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-accent-gold mb-2">💬 Communication Tools:</h4>
            <ul class="text-sm space-y-1">
              <li>• Slack & Microsoft Teams</li>
              <li>• Email etiquette</li>
              <li>• Video conferencing</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-accent-gold mb-2">🤖 AI & Automation:</h4>
            <ul class="text-sm space-y-1">
              <li>• ChatGPT for VA tasks</li>
              <li>• Zapier automation</li>
              <li>• Calendar AI optimization</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-accent-gold mb-2">📅 Admin Skills:</h4>
            <ul class="text-sm space-y-1">
              <li>• Google Workspace mastery</li>
              <li>• Calendar management</li>
              <li>• Document preparation</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    isOpen: false
  },
  {
    question: 'Apakah ada dukungan setelah kelas selesai?',
    answer: `
      <div class="space-y-3">
        <p><strong>Ya, kami mendukung karier Anda seumur hidup!</strong> Setelah lulus, Anda akan mendapatkan:</p>
        <div class="grid md:grid-cols-2 gap-4 mt-4">
          <div class="bg-white/10 p-4 rounded-lg">
            <h4 class="font-semibold text-accent-gold mb-2">🎓 Alumni Benefits:</h4>
            <ul class="text-sm space-y-1">
              <li>• Akses komunitas eksklusif</li>
              <li>• Update tren industri rutin</li>
              <li>• Networking events</li>
            </ul>
          </div>
          <div class="bg-white/10 p-4 rounded-lg">
            <h4 class="font-semibold text-accent-gold mb-2">💼 Career Support:</h4>
            <ul class="text-sm space-y-1">
              <li>• Info lowongan kerja terbaru</li>
              <li>• Portfolio review</li>
              <li>• Interview preparation</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    isOpen: false
  }
])

const toggleFAQ = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}

const handleContactCTA = () => {
  window.open('https://wa.me/628123456789?text=Halo,%20saya%20memiliki%20pertanyaan%20tentang%20program%20Remote%20For%20Hive', '_blank')
}
</script>