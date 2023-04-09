/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-image': "linear-gradient(107.86deg, #1C1C1C 7.16%, #171717 108.66%);",
        'gradient-card': 'linear-gradient(131.78deg, #383838 2.07%, #000000 95.81%);',
        'gradient-btn': 'linear-gradient(94.32deg, #262626 8.94%, #2D2D2D 89.83%);',
        'box-image': "linear-gradient(143.69deg, #323232 12.27%, #272727 47.57%, #141414 92.01%);",
      },
      backgroundColor: {
        'button-hover': '#323232',
      },
    },
  },
  plugins: [],
}
