export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Remote For Hive - Karier Global sebagai Virtual Assistant',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Ubah keahlian Anda menjadi karier global yang fleksibel. Kuasai keterampilan Virtual Assistant profesional dan dapatkan kebebasan bekerja dari mana saja.'
        },
        { name: 'keywords', content: 'Virtual Assistant, VA Indonesia, Kerja Remote, Karir Global, Online Course, Bootcamp VA' },
        { name: 'author', content: 'Remote For Hive' },

        // Open Graph
        { property: 'og:title', content: 'Remote For Hive - Karier Global sebagai Virtual Assistant' },
        {
          property: 'og:description',
          content: 'Ubah keahlian Anda menjadi karier global yang fleksibel. Kuasai keterampilan Virtual Assistant profesional dan dapatkan kebebasan bekerja dari mana saja.'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://remoteforhive.com' },
        { property: 'og:image', content: 'https://remoteforhive.com/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:site_name', content: 'Remote For Hive' },
        { property: 'og:locale', content: 'id_ID' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Remote For Hive - Karier Global sebagai Virtual Assistant' },
        {
          name: 'twitter:description',
          content: 'Ubah keahlian Anda menjadi karier global yang fleksibel. Kuasai keterampilan Virtual Assistant profesional.'
        },
        { name: 'twitter:image', content: 'https://remoteforhive.com/twitter-card.png' },
        { name: 'twitter:site', content: '@remoteforhive' },

        // Additional SEO
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'theme-color', content: '#F59E0B' },

        // Canonical URL
        { rel: 'canonical', href: 'https://remoteforhive.com' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  }
})