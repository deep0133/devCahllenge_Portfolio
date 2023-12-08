/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: '#374151',
        lightGray: '#6B7280',
        back: '#f2f2f2',
        card: 'white'
      }
    },
    plugins: [],
  }
}