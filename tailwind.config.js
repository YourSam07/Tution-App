/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    // colors: {
    //   "red": "#e41c24",
    //   "violet": "#3B3383",
    //   "green": "#d4dc04",
    //   "white": "#ffffff",
    // },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
    },
  },
  plugins: [],
}