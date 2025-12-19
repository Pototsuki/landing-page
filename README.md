# Product Requirements Document (PRD): Remote For Hive Redesign

## 1. Project Information
- **Project Name:** Remote For Hive (RFH) Landing Page
- **Tech Stack:** Nuxt.js (Vue.js), Tailwind CSS.
- **Goal:** Create a premium, elegant, and high-converting landing page for VA classes (Online & Offline).
- **Current URL:** https://remoteforhive.com

---

## 2. Technical Stack & Requirements
- **Framework:** Nuxt 3 (latest stable version).
- **Styling:** Tailwind CSS for a modern, utility-first UI.
- **Icons:** Lucide Icons or Heroicons (minimalist style).
- **Performance:** Grade A on PageSpeed Insights (optimized images, lazy loading).
- **Responsiveness:** Mobile-first approach is mandatory.

---

## 3. Brand & Visual Identity
- **Logo Integration:**
    - High-res SVG format in the Navigation Bar.
    - Implement **Logo Inversion**: White logo on dark sections, original color on light/white sections.
- **Color Palette:**
    - Primary: Dark Charcoal / Deep Navy (for text and dark backgrounds).
    - Accent: Gold or Royal Blue (for Buttons/CTAs).
    - Background: Off-white (#F9FAFB) to provide a clean, premium feel.
- **Typography:**
    - Headings: Playfair Display or Montserrat (Serif/Bold Sans).
    - Body: Inter or Roboto (Clean Sans-serif).

---

## 4. Copywriting & Content (Bahasa Indonesia)

### A. Hero Section
- **Headline:** Ubah Keahlian Anda Menjadi Karier Global yang Fleksibel.
- **Sub-headline:** Kuasai keterampilan Virtual Assistant profesional dan dapatkan kebebasan bekerja dari mana saja. Bergabunglah dengan akademi elit yang menjembatani Anda dengan peluang kerja internasional.
- **CTA Button:** Daftar Kelas Sekarang

### B. Program Selection (Online vs Offline)
- **Headline:** Pilih Jalur Belajar Anda.
- **Online Class:** "Belajar tanpa batas ruang dengan sesi interaktif dan akses komunitas digital seumur hidup."
- **Offline Bootcamp:** "Pengalaman belajar tatap muka yang eksklusif dengan bimbingan langsung di lokasi premium."

### C. FAQ Section (Accordion Style)
1. **Q: Apa perbedaan utama antara kelas Online dan Offline?**
   - **A:** Kelas **Online** dirancang untuk fleksibilitas belajar dari mana saja via sesi interaktif. Kelas **Offline** adalah program bootcamp tatap muka yang berfokus pada bimbingan langsung dan networking yang lebih intim.
2. **Q: Apakah saya harus memiliki pengalaman kerja kantoran sebelumnya?**
   - **A:** Tidak perlu. Kami membimbing Anda dari level dasar hingga mahir, termasuk pengenalan ekosistem kerja remote global.
3. **Q: Keterampilan teknis apa saja yang akan saya pelajari?**
   - **A:** Manajemen proyek (Notion/Trello), komunikasi profesional (Slack), otomasi AI, hingga manajemen kalender standar internasional.
4. **Q: Apakah ada dukungan setelah kelas selesai?**
   - **A:** Ya. Seluruh alumni Remote For Hive akan bergabung dalam komunitas eksklusif untuk diskusi, update tren industri, dan informasi lowongan kerja terbaru.

---

## 5. Development Tasks (To-Do List)
- [ ] Initialize Nuxt 3 project with Tailwind CSS.
- [ ] Configure `tailwind.config.js` with brand colors and typography.
- [ ] Create reusable `Navbar.vue` with Glassmorphism effect and Logo Inversion.
- [ ] Build Hero section with high-quality WebP images.
- [ ] Build Accordion component for the FAQ section.
- [ ] Setup API Integration or WhatsApp redirection for CTAs.
- [ ] Deploy to Vercel/Netlify for staging review.

---

## 6. Premium Touches
- **Smooth Scroll:** Implement smooth scrolling for internal links.
- **Hover Effects:** Subtle scaling or opacity changes for the Logo and CTA buttons.
- **SEO:** Metadata setup for social sharing (OG tags) and SEO-friendly header hierarchy (H1, H2, H3).