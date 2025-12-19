export default defineNuxtPlugin(() => {
  // Add structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Remote For Hive",
    "url": "https://remoteforhive.com",
    "logo": "https://remoteforhive.com/logo.png",
    "description": "Akademi elit untuk Virtual Assistant profesional yang menghubungkan talenta Indonesia dengan peluang karier global",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jakarta",
      "addressCountry": "Indonesia"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-812-3456-789",
      "contactType": "customer service",
      "availableLanguage": ["Indonesian", "English"]
    },
    "sameAs": [
      "https://instagram.com/remoteforhive",
      "https://linkedin.com/company/remoteforhive"
    ]
  }

  // Add structured data to head
  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(structuredData)
      }
    ]
  })
})