<template>
  <section id="contact" class="relative bg-gradient-cute overflow-hidden">
    <!-- Floating decorations -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-10 right-10 w-16 h-16 bg-pototsuki-yellow rounded-full opacity-40 animate-float" />
      <div class="absolute bottom-20 left-20 w-20 h-20 bg-pototsuki-blue rounded-full opacity-40 animate-float-delayed" />
      <div class="absolute top-1/2 right-1/4 w-12 h-12 bg-pototsuki-pink rounded-full opacity-40 animate-float" />
    </div>

    <div class="section-container relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-6 animate-slide-up">
          <span class="inline-block bg-white/80 backdrop-blur-sm text-pototsuki-purple-dark px-4 py-2 rounded-full text-sm font-semibold">
            Get In Touch
          </span>
          <h2 class="text-4xl md:text-5xl font-poppins font-bold text-gray-800">
            Let's Create Something <span class="gradient-text">Amazing Together</span>
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            Ready to transform your online presence? We'd love to hear about your project. Drop us a message and let's start the conversation!
          </p>

          <!-- Contact Info -->
          <div class="space-y-4 pt-4">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-white rounded-2xl shadow-soft flex items-center justify-center">
                <span class="text-xl">📧</span>
              </div>
              <div>
                <p class="text-sm text-gray-500">Email us at</p>
                <a href="mailto:pototsukifoundation@gmail.com" class="font-semibold text-gray-800 hover:text-pototsuki-purple-dark transition-colors">
                  pototsukifoundation@gmail.com
                </a>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-white rounded-2xl shadow-soft flex items-center justify-center">
                <span class="text-xl">⏰</span>
              </div>
              <div>
                <p class="text-sm text-gray-500">Response time</p>
                <p class="font-semibold text-gray-800">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Content - Form -->
        <div class="animate-slide-up" style="animation-delay: 0.2s">
          <BaseCard class="!bg-white/90 backdrop-blur-sm">
            <form
              @submit.prevent="handleSubmit"
              class="space-y-6"
            >
              <div>
                <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name ✨
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 rounded-2xl border-2 border-pototsuki-purple-light focus:border-pototsuki-purple-dark focus:outline-none transition-colors bg-white/50"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address 📧
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 rounded-2xl border-2 border-pototsuki-purple-light focus:border-pototsuki-purple-dark focus:outline-none transition-colors bg-white/50"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label for="package" class="block text-sm font-semibold text-gray-700 mb-2">
                  Interested Package 🎁
                </label>
                <select
                  id="package"
                  v-model="form.package"
                  class="w-full px-4 py-3 rounded-2xl border-2 border-pototsuki-purple-light focus:border-pototsuki-purple-dark focus:outline-none transition-colors bg-white/50"
                >
                  <option value="">Select a package</option>
                  <option value="sprout">The Sprout (5-7 days)</option>
                  <option value="blossom">The Blossom (2-3 weeks)</option>
                  <option value="custom">Custom Project</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">
                  Tell Us About Your Project 💭
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                  required
                  class="w-full px-4 py-3 rounded-2xl border-2 border-pototsuki-purple-light focus:border-pototsuki-purple-dark focus:outline-none transition-colors resize-none bg-white/50"
                  placeholder="Describe your project, goals, and any specific requirements..."
                />
              </div>

              <BaseButton type="submit" variant="primary" size="lg" class="w-full" :disabled="submitting">
                <span v-if="!submitting && !submitted">Send Message 🚀</span>
                <span v-else-if="submitting">Sending... ⏳</span>
                <span v-else>Message Sent! 🎉</span>
              </BaseButton>
            </form>
          </BaseCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const form = ref({
  name: '',
  email: '',
  package: '',
  message: ''
})

const submitted = ref(false)
const submitting = ref(false)

const handleSubmit = async () => {
  submitting.value = true

  try {
    const response = await fetch('https://formspree.io/f/mvzgaoae', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        package: form.value.package,
        message: form.value.message
      })
    })

    if (response.ok) {
      submitted.value = true
      submitting.value = false

      // Reset after 3 seconds
      setTimeout(() => {
        submitted.value = false
        form.value = {
          name: '',
          email: '',
          package: '',
          message: ''
        }
      }, 3000)
    } else {
      const data = await response.json()
      alert('Error: ' + (data.error || 'Something went wrong'))
      submitting.value = false
    }
  } catch (error) {
    alert('Error submitting form. Please try again.')
    submitting.value = false
  }
}
</script>
