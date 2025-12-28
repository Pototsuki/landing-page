<template>
  <section id="faq" class="relative bg-white">
    <div class="section-container">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-slide-up">
        <span class="inline-block bg-pototsuki-pink-light text-pototsuki-pink-dark px-4 py-2 rounded-full text-sm font-semibold mb-4">
          FAQ
        </span>
        <h2 class="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-4">
          Frequently Asked <span class="gradient-text">Questions</span>
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Got questions? We've got answers! Here are some common queries about our services.
        </p>
      </div>

      <!-- FAQ Grid -->
      <div class="max-w-3xl mx-auto space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="bg-pototsuki-cream-light rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-soft animate-slide-up"
          :class="openIndex === index ? 'shadow-soft-lg' : ''"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <button
            class="w-full px-8 py-6 flex items-center justify-between text-left"
            @click="toggleFaq(index)"
          >
            <span class="text-lg font-semibold text-gray-800 pr-4">
              {{ faq.question }}
            </span>
            <div
              class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
              :class="openIndex === index ? 'bg-pototsuki-pink rotate-45' : 'bg-pototsuki-purple-light'"
            >
              <svg class="w-6 h-6 transition-transform duration-300" :class="openIndex === index ? 'text-white' : 'text-pototsuki-purple-dark'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </button>

          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-300 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
          >
            <div v-show="openIndex === index" class="px-8 pb-6">
              <p class="text-gray-600 leading-relaxed">
                {{ faq.answer }}
              </p>
            </div>
          </Transition>
        </div>
      </div>

      <!-- Still have questions CTA -->
      <div class="mt-16 text-center animate-slide-up" style="animation-delay: 0.4s">
        <p class="text-gray-600 mb-6">
          Still have questions? We'd love to hear from you!
        </p>
        <BaseButton variant="primary" size="lg" @click="scrollToContact">
          Contact Us
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const openIndex = ref<number | null>(null)

const faqs = [
  {
    question: "Why choose a 'cute' design?",
    answer: "A unique aesthetic creates an emotional connection with your audience and makes your brand more memorable than generic corporate templates. Standing out in today's digital landscape is crucial, and a distinctive, cute design helps you leave a lasting impression."
  },
  {
    question: "How long does the process take?",
    answer: "Depending on the scale, a Sprout project takes 5-7 days, while a Blossom project takes 2-3 weeks. We work efficiently without compromising quality, and we'll keep you updated every step of the way."
  },
  {
    question: "Can I update the content later?",
    answer: "Yes! We build with Nuxt.js using a modular structure, making it very easy for any developer to maintain or update in the future. We also provide documentation and can train your team on basic updates."
  },
  {
    question: "What's included in the revision rounds?",
    answer: "Revision rounds include design tweaks, content updates, and minor feature additions. We want to ensure you're completely happy with the final product, so we work closely with you throughout the process."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Absolutely! We offer various maintenance packages to keep your site running smoothly, update content, and add new features as your business grows. Just ask us about our support options."
  }
]

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}

const scrollToContact = () => {
  const element = document.getElementById('contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
