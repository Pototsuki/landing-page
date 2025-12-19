<template>
  <section id="home" class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            {{ heroContent.title }}
          </h1>
          <p class="hero-subtitle">
            {{ heroContent.subtitle }}
          </p>
          <div class="hero-buttons">
            <a href="#programs" class="btn btn-primary">
              {{ heroContent.primaryCTA }}
            </a>
            <a href="#about" class="btn btn-secondary">
              {{ heroContent.secondaryCTA }}
            </a>
          </div>
        </div>
        <div class="hero-image">
          <div class="hero-graphic">
            <div class="floating-card card-1">
              <div class="card-icon">💼</div>
              <div class="card-text">Remote Work</div>
            </div>
            <div class="floating-card card-2">
              <div class="card-icon">🚀</div>
              <div class="card-text">Career Growth</div>
            </div>
            <div class="floating-card card-3">
              <div class="card-icon">🎯</div>
              <div class="card-text">Skill Building</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { HeroContent } from '@/types'

const heroContent = ref<HeroContent>({
  title: 'Your Remote Career Starts Here',
  subtitle: 'Join thousands of professionals who have transformed their careers with our comprehensive remote work training programs.',
  primaryCTA: 'Explore Programs',
  secondaryCTA: 'Learn More',
})

onMounted(() => {
  // Add any animations or interactions here
})
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, var(--dark-teal) 0%, #1a5244 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  opacity: 0.3;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: var(--white);
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-graphic {
  position: relative;
  width: 400px;
  height: 400px;
}

.floating-card {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--white);
  font-weight: 600;
  animation: float 6s ease-in-out infinite;
}

.card-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.card-2 {
  top: 50%;
  right: 10%;
  animation-delay: 2s;
}

.card-3 {
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

.card-icon {
  font-size: 2rem;
}

.card-text {
  font-size: 1rem;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-graphic {
    width: 300px;
    height: 300px;
  }

  .floating-card {
    padding: 1rem;
  }

  .card-icon {
    font-size: 1.5rem;
  }

  .card-text {
    font-size: 0.9rem;
  }
}
</style>