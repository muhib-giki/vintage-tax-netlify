// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // 1. Files in the project root (App.tsx, index.tsx, index.html)
    "./*.{html,js,ts,jsx,tsx}", 
    
    // 2. All files inside the 'components' folder
    "./components/**/*.{js,ts,jsx,tsx}",
    
    // 3. All files inside the 'services' folder (less common, but safe to include)
    "./services/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // PASTE YOUR CUSTOM CONFIG HERE
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
                100: '#e0f2fe',
                200: '#bae6fd',
                300: '#7dd3fc',
                400: '#38bdf8',
                500: '#0ea5e9',
                600: '#0284c7',
                700: '#0369a1',
                800: '#075985',
                900: '#0c4a6e', // Deep Blue
                950: '#082f49',
        },
        accent: {
          50: '#f0fdf4',
                100: '#dcfce7',
                200: '#bbf7d0',
                300: '#86efac',
                400: '#4ade80',
                500: '#22c55e', // Vibrant Green
                600: '#16a34a',
                700: '#15803d',
                800: '#166534',
                900: '#14532d',
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        }
      }
    }
  },
  plugins: [],
}