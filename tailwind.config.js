/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'dm-sans': ['DM Sans'],
      poppins: ['Poppins'],
      montserrat: ['Montserrat'],
    },
  },
  plugins: [],
};
