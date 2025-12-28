# 🌸 Pototsuki Foundation Landing Page

A creative, interactive landing page for Pototsuki Foundation - a digital agency specializing in unique, kawaii-styled landing pages for small to medium businesses.

![Nuxt](https://img.shields.io/badge/Nuxt-3.x-green)
![Vue](https://img.shields.io/badge/Vue-3.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-cyan)

## 🎨 Features

- **Hero Section** - Eye-catching intro with founder image and rotating decorative elements
- **Services Section** - Two service packages (The Sprout & The Blossom)
- **FAQ Section** - Interactive accordion with smooth animations
- **Contact Form** - Functional contact form with validation
- **Responsive Design** - Mobile-first approach that works on all devices
- **Smooth Animations** - CSS-based animations for playful interactions
- **Pastel Color Palette** - Cute, kawaii aesthetic with soft colors

## 🛠 Tech Stack

- **Framework:** Nuxt.js 3
- **UI Library:** Vue 3
- **Styling:** Tailwind CSS with custom pastel theme
- **Icons:** Emojis for a playful touch
- **Animations:** Custom CSS keyframe animations

## 📋 Prerequisites

Before running this project, ensure you have:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** / **pnpm**

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

Or if you're using yarn/pnpm:

```bash
yarn install
# or
pnpm install
```

### 2. Run Development Server

```bash
npm run dev
```

The application will start on [http://localhost:3000](http://localhost:3000)

If port 3000 is already in use, Nuxt will automatically try the next available port (3001, 3002, etc.).

### 3. Open in Browser

Navigate to the URL shown in your terminal (typically `http://localhost:3000`) in your web browser.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run generate` | Generate static site |
| `npm run preview` | Preview production build locally |

## 📁 Project Structure

```
landing-page/
├── assets/
│   └── css/
│       └── main.css          # Global CSS and Tailwind custom styles
├── components/
│   ├── BaseButton.vue        # Reusable button component
│   ├── BaseCard.vue          # Reusable card component
│   ├── AppHeader.vue         # Site header with navigation
│   ├── AppFooter.vue         # Site footer
│   ├── HeroSection.vue       # Hero section with founder image
│   ├── ServicesSection.vue   # Services/pricing section
│   ├── FAQSection.vue        # FAQ accordion
│   └── ContactSection.vue    # Contact form section
├── layouts/
│   └── default.vue           # Main layout wrapper
├── pages/
│   └── index.vue             # Home page
├── public/
│   └── pototsuki.png         # Founder image
├── app.vue                   # Root app component
├── nuxt.config.ts            # Nuxt configuration
├── tailwind.config.ts        # Tailwind configuration with custom theme
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies

```

## 🎨 Customization

### Colors

The project uses a custom pastel color palette defined in `tailwind.config.ts`:

- `pototsuki-pink` - Soft pink
- `pototsuki-purple` - Gentle purple
- `pototsuki-mint` - Fresh mint green
- `pototsuki-yellow` - Warm yellow
- `pototsuki-blue` - Light blue
- `pototsuki-cream` - Creamy off-white

To customize colors, edit `tailwind.config.ts`:

```typescript
colors: {
  'pototsuki': {
    pink: '#FFD6E0',
    purple: '#E0D4F7',
    // ... add your custom colors
  }
}
```

### Content

- **Hero Section:** Edit `components/HeroSection.vue`
- **Services:** Edit `components/ServicesSection.vue`
- **FAQ:** Edit the `faqs` array in `components/FAQSection.vue`
- **Contact Form:** Edit `components/ContactSection.vue`

### Founder Image

Replace `public/pototsuki.png` with your own image. Recommended size: 500x500px or larger for best quality.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Nuxt and configure everything

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Set build command to `npm run build`
5. Set publish directory to `.output/public`

### Static Export

To generate a static site:

```bash
npm run generate
```

The static files will be in the `.output/public` directory.

## 🔧 Troubleshooting

### White screen or components not loading

1. Clear your `.nuxt` folder:
   ```bash
   rm -rf .nuxt
   ```

2. Reinstall dependencies:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. Restart the dev server:
   ```bash
   npm run dev
   ```

### Port already in use

If you see "Port 3000 is already in use", Nuxt will automatically try the next available port. Alternatively, you can:

- Kill the process using port 3000:
  - **Windows:** `netstat -ano | findstr :3000` then `taskkill /PID <PID> /F`
  - **Mac/Linux:** `lsof -ti:3000 | xargs kill -9`

### Components not resolving

Ensure all components are in the `components/` folder at the root level. Nuxt 3 auto-imports components from this directory.

## 📝 License

© 2025 Pototsuki Foundation. All Rights Reserved.

## 💝 Credits

Built with 💖 using Nuxt 3, Vue 3, and Tailwind CSS.
