/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: '#f5f5f7',
          text: '#1d1d1f',
        },
        secondary: {
          bg: '#ffffff',
          text: '#6e6e73',
        },
        accent: {
          blue: '#0066cc',
          'blue-light': '#0071e3',
        },
        border: '#d2d2d7',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 30px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        'section': '4rem',
      },
    },
  },
  plugins: [],
}