<template>
  <nav class="navigation">
    <div class="container">
      <div class="nav-content">
        <div class="nav-brand">
          <h1>{{ env.appTitle }}</h1>
        </div>
        <ul class="nav-menu" :class="{ 'nav-menu--open': isMenuOpen }">
          <li v-for="item in navigationItems" :key="item.name">
            <a :href="item.href" @click="closeMenu">{{ item.name }}</a>
          </li>
        </ul>
        <button
          class="nav-toggle"
          @click="toggleMenu"
          :class="{ 'nav-toggle--open': isMenuOpen }"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { env } from '@/utils/env'
import type { NavigationItem } from '@/types'

const isMenuOpen = ref(false)

const navigationItems: NavigationItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Contact', href: '#contact' },
]

const toggleMenu = (): void => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = (): void => {
  isMenuOpen.value = false
}

const handleResize = (): void => {
  if (window.innerWidth > 768) {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.navigation {
  background-color: var(--dark-teal);
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand h1 {
  color: var(--primary-orange);
  font-size: 1.8rem;
  font-weight: 800;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;
}

.nav-menu a {
  color: var(--white);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
  padding: 0.5rem 0;
}

.nav-menu a:hover {
  color: var(--primary-orange);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.nav-toggle span {
  width: 25px;
  height: 3px;
  background-color: var(--white);
  margin: 3px 0;
  transition: var(--transition);
}

.nav-toggle--open span:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.nav-toggle--open span:nth-child(2) {
  opacity: 0;
}

.nav-toggle--open span:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: var(--dark-teal);
    flex-direction: column;
    padding: 1rem 0;
    gap: 1rem;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
  }

  .nav-menu--open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
}
</style>