<template>
  <section class="statistics">
    <div class="container">
      <div class="statistics-content">
        <div class="stat-card" v-for="stat in statistics" :key="stat.label">
          <div class="stat-number">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Statistic } from '@/types'

const statistics = ref<Statistic[]>([
  { value: '700+', label: 'Students' },
  { value: '8', label: 'Expert Mentors' },
  { value: '95%', label: 'Success Rate' },
  { value: '50+', label: 'Companies' },
])
</script>

<style scoped>
.statistics {
  background-color: var(--light-gray);
  padding: 4rem 0;
}

.statistics-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
}

.stat-card {
  background-color: var(--white);
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  color: var(--primary-orange);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--dark-gray);
}

@media (max-width: 768px) {
  .statistics-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .stat-card {
    padding: 1.5rem;
  }

  .stat-number {
    font-size: 2.5rem;
  }

  .stat-label {
    font-size: 1rem;
  }
}
</style>