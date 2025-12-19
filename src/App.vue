<template>
  <div id="app">
    <Navigation />
    <main>
      <HeroSection />
      <StatisticsSection />

      <!-- About Section -->
      <section id="about" class="section">
        <div class="container text-center">
          <h2 class="section-title">About Privasii</h2>
          <p class="section-description">
            We are dedicated to helping professionals launch and grow their remote careers.
            Our comprehensive training programs, expert mentorship, and career support services
            ensure you're prepared for success in the remote work landscape.
          </p>
        </div>
      </section>

      <!-- Programs Section -->
      <section id="programs" class="section section-alt">
        <div class="container text-center">
          <h2 class="section-title">Our Programs</h2>
          <div class="programs-grid">
            <div class="program-card" v-for="program in programs" :key="program.title">
              <div class="program-icon">{{ program.icon }}</div>
              <h3>{{ program.title }}</h3>
              <p>{{ program.description }}</p>
              <a href="#contact" class="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="section">
        <div class="container">
          <div class="contact-content">
            <div class="contact-info">
              <h2 class="section-title">Get Started Today</h2>
              <p>Ready to transform your career? Contact us to learn more about our programs.</p>
              <div class="contact-details">
                <div class="contact-item">
                  <strong>Email:</strong> <a :href="`mailto:${env.contactEmail}`">{{ env.contactEmail }}</a>
                </div>
                <div class="contact-item">
                  <strong>Phone:</strong> <a :href="`tel:${env.phoneNumber}`">{{ env.phoneNumber }}</a>
                </div>
              </div>
            </div>
            <div class="contact-form">
              <form @submit.prevent="handleSubmit">
                <div class="form-group">
                  <input v-model="form.name" type="text" placeholder="Your Name" required />
                </div>
                <div class="form-group">
                  <input v-model="form.email" type="email" placeholder="Your Email" required />
                </div>
                <div class="form-group">
                  <textarea v-model="form.message" placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary full-width">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <h3>{{ env.appTitle }}</h3>
            <p>{{ env.appDescription }}</p>
          </div>
          <div class="footer-social">
            <a :href="env.twitterUrl" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a :href="env.linkedinUrl" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a :href="env.githubUrl" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} {{ env.appTitle }}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Navigation from '@/components/Navigation.vue'
import HeroSection from '@/components/HeroSection.vue'
import StatisticsSection from '@/components/StatisticsSection.vue'
import { env } from '@/utils/env'

interface Program {
  icon: string
  title: string
  description: string
}

interface ContactForm {
  name: string
  email: string
  message: string
}

const programs = ref<Program[]>([
  {
    icon: '💻',
    title: 'Remote Development',
    description: 'Master in-demand remote development skills with hands-on projects and expert guidance.'
  },
  {
    icon: '🎨',
    title: 'Digital Design',
    description: 'Learn digital design principles and tools for creating stunning remote work portfolios.'
  },
  {
    icon: '📈',
    title: 'Digital Marketing',
    description: 'Develop comprehensive digital marketing strategies for remote success.'
  },
])

const form = ref<ContactForm>({
  name: '',
  email: '',
  message: '',
})

const currentYear = computed(() => new Date().getFullYear())

const handleSubmit = async () => {
  try {
    // Here you would typically send the form data to your API
    console.log('Form submitted:', form.value)

    // Reset form
    form.value = {
      name: '',
      email: '',
      message: '',
    }

    alert('Thank you for your message! We will get back to you soon.')
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('There was an error submitting your message. Please try again.')
  }
}
</script>

<style scoped>
.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--dark-teal);
  margin-bottom: 1rem;
}

.section-description {
  font-size: 1.2rem;
  color: var(--dark-gray);
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

.section-alt {
  background-color: var(--light-gray);
}

.programs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.program-card {
  background-color: var(--white);
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: var(--transition);
}

.program-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.program-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.program-card h3 {
  font-size: 1.5rem;
  color: var(--dark-teal);
  margin-bottom: 1rem;
}

.program-card p {
  color: var(--dark-gray);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contact-info {
  padding: 2rem;
}

.contact-details {
  margin-top: 2rem;
}

.contact-item {
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.contact-item a {
  color: var(--primary-orange);
  text-decoration: none;
}

.contact-item a:hover {
  text-decoration: underline;
}

.contact-form {
  background-color: var(--white);
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: var(--border-radius);
  font-size: 16px;
  transition: var(--transition);
  font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-orange);
  box-shadow: 0 0 0 3px rgba(239, 147, 36, 0.1);
}

.full-width {
  width: 100%;
}

.footer {
  background-color: var(--dark-teal);
  color: var(--white);
  padding: 3rem 0 1rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.footer-brand h3 {
  color: var(--primary-orange);
  margin-bottom: 0.5rem;
}

.footer-social {
  display: flex;
  gap: 2rem;
}

.footer-social a {
  color: var(--white);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
}

.footer-social a:hover {
  color: var(--primary-orange);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .section-description {
    font-size: 1.1rem;
  }

  .programs-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  .footer-social {
    justify-content: center;
  }
}
</style>