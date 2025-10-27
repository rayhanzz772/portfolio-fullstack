/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
        mori: ['Mori', 'sans-serif'],
        grotesk: ['Overused Grotesk', 'sans-serif'],
        ppvalve: ['PP Valve', 'sans-serif'],
        helvetica: ['"Helvetica Neue"', 'sans-serif'],
        },
    },
  },
  plugins: [],
}
