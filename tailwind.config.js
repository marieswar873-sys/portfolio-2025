/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom premium colors inspired by the reference
        'dark-bg': '#0a0a0a',
        'card-bg': '#1a1a1a',
        'accent': '#3b82f6', // A nice blue, can be adjusted
        'text-primary': '#ffffff',
        'text-secondary': '#a1a1aa',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
