/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#111D35', light: '#1B2B4D', deep: '#0A1326' },
        gold: { DEFAULT: '#B79555', light: '#D4B982', dark: '#8F7240' },
        ivory: { DEFAULT: '#F6F0E5', dark: '#EAE0CC' },
        maroon: { DEFAULT: '#632D38', light: '#7D3A48' },
        charcoal: '#282828',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: { soft: '0 10px 30px -12px rgba(17,29,53,0.25)' },
    },
  },
  plugins: [],
}
