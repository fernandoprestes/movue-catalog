/** @type {import('tailwindcss/types').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,vue}', './src/**/*', './index.html'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        hero: 'linear-gradient(to bottom, #2d0c5e 90%, #E5E5E5 10%)',
      },
    },
  },
  plugins: [],
};
