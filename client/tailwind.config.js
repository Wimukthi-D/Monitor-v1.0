/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-custom': 'inset 0px -0.5px 2px rgba(244, 253, 255, 0.43)', 
      }
    },
  },
  plugins: [],
};

