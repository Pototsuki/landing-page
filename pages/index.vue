<template>
  <div>
    <!-- Hero Section -->
    <HeroSection />

    <!-- Services Section -->
    <ServicesSection />

    <!-- FAQ Section -->
    <FAQSection />

    <!-- Contact Section -->
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
// Main landing page combining all sections
useHead({
  title: 'Pototsuki Foundation - Crafting Digital Spaces That Spark Joy',
  meta: [
    {
      name: 'description',
      content: 'Pototsuki Foundation helps small and medium brands stand out with unique, creative, and high-performance landing pages.'
    }
  ]
})
</script>
