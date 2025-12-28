import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        // Pastel Color Palette
        'pototsuki': {
          pink: '#FFD6E0',
          'pink-light': '#FFE5EC',
          'pink-dark': '#FFB3C6',
          purple: '#E0D4F7',
          'purple-light': '#F0E8FF',
          'purple-dark': '#C9B8E8',
          mint: '#D4F0E7',
          'mint-light': '#E8F8F3',
          'mint-dark': '#B8E5DB',
          yellow: '#FFF3CD',
          'yellow-light': '#FFF9E6',
          'yellow-dark': '#FFE9A0',
          blue: '#D6E8FF',
          'blue-light': '#EBF4FF',
          'blue-dark': '#B8D9FF',
          cream: '#FFF9F0',
          'cream-light': '#FFFCF7'
        }
      },
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem'
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 8px 30px rgba(0, 0, 0, 0.08)',
        'cute': '0 4px 20px rgba(255, 179, 198, 0.3)',
        'cute-lg': '0 8px 30px rgba(255, 179, 198, 0.4)',
        'float': '0 10px 40px rgba(224, 212, 247, 0.4)'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.6s ease-out forwards'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' }
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-cute': 'linear-gradient(135deg, #FFE5EC 0%, #F0E8FF 50%, #E8F8F3 100%)',
        'gradient-pink': 'linear-gradient(135deg, #FFD6E0 0%, #E0D4F7 100%)',
        'gradient-mint': 'linear-gradient(135deg, #D4F0E7 0%, #D6E8FF 100%)'
      }
    }
  },
  plugins: []
}
