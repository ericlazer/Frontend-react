/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'gradient-image': 'linear-gradient(131.78deg, #383838 2.07%, #000000 95.81%);',
        'gradient-btn': 'linear-gradient(94.32deg, #262626 8.94%, #2D2D2D 89.83%);',
      }),
    },
  },
  plugins: [],
}
