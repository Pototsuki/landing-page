# Remote For Hive - Landing Page

## Project Overview

Landing page premium untuk Remote For Hive - Akademi Virtual Assistant profesional yang menghubungkan talenta Indonesia dengan peluang karier global.

## Tech Stack

- **Framework**: Nuxt 3 (Vue.js)
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Deployment**: Vercel/Netlify ready

## Prerequisites

Sebelum menjalankan project ini, pastikan Anda telah menginstall:

- Node.js (versi 18.0 atau lebih tinggi)
- npm atau yarn
- Git

## Installation

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   # atau
   yarn install
   ```

3. **Environment setup** (opsional)
   Buat file `.env` di root directory:
   ```env
   NUXT_PUBLIC_WHATSAPP_NUMBER=628123456789
   NUXT_PUBLIC_BASE_URL=https://remoteforhive.com
   ```

## Running the Project

### Development Mode

```bash
# Start development server
npm run dev

# Server akan berjalan di http://localhost:3000
```

### Build for Production

```bash
# Build project untuk production
npm run build

# Preview production build
npm run preview
```

### Generate Static Site

```bash
# Generate static files
npm run generate

# Output akan berada di folder .output/public
```

## Project Structure

```
landing-page/
├── assets/
│   └── css/
│       └── main.css          # Custom CSS & Tailwind imports
├── components/
│   ├── Navbar.vue           # Navigation bar dengan glassmorphism effect
│   ├── HeroSection.vue      # Hero section dengan animasi
│   ├── ProgramSelection.vue # Program cards (Online vs Offline)
│   ├── FAQSection.vue       # FAQ accordion
│   └── FooterSection.vue    # Footer dengan newsletter
├── composables/
│   └── useSmoothScroll.ts   # Smooth scroll functionality
├── plugins/
│   └── seo.client.ts        # SEO metadata & structured data
├── public/                  # Static assets
├── app.vue                  # Main app component
├── nuxt.config.ts          # Nuxt configuration
├── tailwind.config.js      # Tailwind configuration
└── package.json
```

## Features

### ✨ Implemented Features

1. **Premium Design**
   - Glassmorphism effect pada navbar
   - Gradient backgrounds dan hover effects
   - Custom animations dan transitions
   - Mobile-first responsive design

2. **Navigation**
   - Sticky navbar dengan logo inversion
   - Smooth scrolling antar sections
   - Mobile-friendly hamburger menu
   - Active section detection

3. **Content Sections**
   - Hero section dengan CTA buttons
   - Program selection (Online vs Offline)
   - FAQ accordion dengan rich content
   - Footer dengan newsletter subscription

4. **SEO Optimization**
   - Meta tags untuk social sharing
   - Structured data (Schema.org)
   - Open Graph & Twitter Cards
   - Sitemap ready

5. **Performance**
   - Optimized images dengan WebP support
   - Lazy loading untuk better performance
   - Minimal bundle size

## Customization

### Brand Colors

Edit `tailwind.config.js` untuk mengubah brand colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: { /* custom colors */ },
      accent: { /* accent colors */ }
    }
  }
}
```

### Content Updates

- **Hero Section**: Edit `HeroSection.vue`
- **Program Details**: Edit `ProgramSelection.vue`
- **FAQ Items**: Update `faqs` array di `FAQSection.vue`
- **Contact Info**: Edit `FooterSection.vue`

### WhatsApp Integration

Update nomor WhatsApp di semua components:

1. Edit `NUXT_PUBLIC_WHATSAPP_NUMBER` di `.env`
2. Atau langsung edit di setiap component yang ada WhatsApp CTA

## Deployment

### Vercel (Recommended)

1. Push ke GitHub repository
2. Connect ke Vercel
3. Auto-deployment akan berjalan

### Manual Deployment

```bash
# Build untuk production
npm run build

# Deploy ke Vercel
vercel --prod

# Atau deploy ke Netlify
netlify deploy --prod --dir=.output/public
```

## Environment Variables

Create `.env` file untuk configuration:

```env
# WhatsApp number (dengan kode negara)
NUXT_PUBLIC_WHATSAPP_NUMBER=628123456789

# Base URL
NUXT_PUBLIC_BASE_URL=https://remoteforhive.com

# Analytics (opsional)
NUXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Development Guidelines

### Adding New Sections

1. Create component baru di `components/`
2. Import di `app.vue`
3. Add ke navigation menu di `Navbar.vue`

### Styling Guidelines

- Gunakan Tailwind classes untuk styling
- Custom animations tambahkan di `tailwind.config.js`
- Mobile-first approach wajib

### SEO Best Practices

1. Gunakan semantic HTML tags
2. Add alt text untuk semua images
3. Include structured data untuk rich snippets
4. Test dengan Google PageSpeed Insights

## Troubleshooting

### Common Issues

1. **Module not found error**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Tailwind not working**
   ```bash
   npm run postinstall
   ```

3. **Build errors**
   ```bash
   npm run clean
   npm run build
   ```

### Performance Optimization

1. Optimize images dengan WebP format
2. Gunakan lazy loading untuk images
3. Minimize CSS dan JavaScript bundle
4. Enable Gzip compression di production

## Support

Untuk pertanyaan atau bantuan:

- **WhatsApp**: +62 812-3456-789
- **Email**: info@remoteforhive.com
- **Documentation**: [Remote For Hive Docs](https://docs.remoteforhive.com)

## License

© 2024 Remote For Hive. All rights reserved.