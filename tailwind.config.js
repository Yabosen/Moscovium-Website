/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          purple: '#9C27B0',
          blue: '#2196F3',
          green: '#4CAF50',
          orange: '#FF9800',
          red: '#F44336',
          pink: '#E91E63',
          teal: '#009688',
          indigo: '#3F51B5',
          amber: '#FFC107',
          cyan: '#00BCD4',
        }
      },
      animation: {
        'scale-hover': 'scale-hover 0.2s ease-in-out',
        'opacity-hover': 'opacity-hover 0.3s ease-in-out',
      },
      keyframes: {
        'scale-hover': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        'opacity-hover': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0.3' },
        }
      }
    },
  },
  plugins: [],
}
