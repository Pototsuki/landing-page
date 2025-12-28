# 🌸 Pototsuki Foundation - Landing Page Project

## 📌 Project Overview
**Pototsuki Foundation** is a creative digital agency specialized in crafting high-quality, unique, and "kawaii" (cute) landing pages for small to medium-sized businesses. 

The goal of this website is to act as a portfolio and service catalog that stands out from typical corporate designs by using playful aesthetics, soft colors, and creative layouts.

---

## 🛠 Tech Stack & Requirements
To ensure scalability and ease of maintenance, the developer must follow these technical specifications:

* **Framework:** [Nuxt.js 3](https://nuxt.com/) (Vue 3)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Icons:** Lucide Icons or Phospor Icons (for a clean, friendly look)
* **Animations:** GSAP or Framer Motion (Vue Use Motion) for smooth, playful transitions.
* **Deployment:** Optimized for Vercel or Netlify.

---

## 📂 Architecture & Folder Structure
The developer **must** follow a clean, modular structure to ensure the project is easy to update:

```text
/
├── assets/             # Global CSS (Tailwind base), fonts, and unoptimized images
├── components/         # Atomic Design approach
│   ├── base/           # Reusable UI (Buttons, Inputs, Cards)
│   ├── layout/         # Header, Footer, Navigation
│   └── sections/       # Hero.vue, Services.vue, Portfolio.vue, FAQ.vue
├── composables/        # Reusable logic and state management
├── layouts/            # Page wrappers (default.vue)
├── pages/              # App routing (index.vue is the main landing)
├── public/             # Static assets (favicons, heavy illustrations)
├── tailwind.config.ts  # Custom "Cute" theme configuration (Pastel colors, rounded corners)
└── nuxt.config.ts      # Nuxt engine configuration

---

## 🎨 Design Vision

Vibe: Unique, Cute, Creative, and Trustworthy.

Visual Elements: Rounded corners (large border-radius), pastel color palettes (soft pinks, purples, or mint), and playful typography.

Interactions: Micro-interactions on buttons, floating animations for illustrations, and smooth scroll reveals.

---

## ✍️ Copywriting Content
1. Hero Section
Headline: "Crafting Digital Spaces That Spark Joy ✨"

Sub-headline: "Pototsuki Foundation helps small and medium brands stand out with unique, creative, and high-performance landing pages. Not just a website, but a personality."

Primary CTA: "Let's Build Something Cute"

Secondary CTA: "View Portfolio"

2. Services Section
The Sprout (Small Scale): Fast, effective, and beautiful one-page sites for personal brands or startups.

The Blossom (Medium Scale): Multi-section landing pages with advanced animations and lead generation focus.

3. FAQ Section (Basic)
Q: Why choose a 'cute' design?

A: A unique aesthetic creates an emotional connection with your audience and makes your brand more memorable than generic corporate templates.

Q: How long does the process take?

A: Depending on the scale, a Sprout project takes 5-7 days, while a Blossom project takes 2-3 weeks.

Q: Can I update the content later?

A: Yes! We build with Nuxt.js using a modular structure, making it very easy for any developer to maintain or update in the future.

---

## 🚀 Guidelines for Developers
Clean Code: Use meaningful variable names and keep components small/reusable.

Responsiveness: Mobile-first is a must. The "cute" elements should still look organized on smaller screens.

Performance: Ensure images are optimized using @nuxt/image.

Maintainability: All brand colors and spacing must be defined in tailwind.config.ts.

© 2025 Pototsuki Foundation. All Rights Reserved.