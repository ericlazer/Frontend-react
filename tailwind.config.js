/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'gradient-image': "linear-gradient(107.86deg, #1C1C1C 7.16%, #171717 108.66%);",
        'box-image': "linear-gradient(143.69deg, #323232 12.27%, #272727 47.57%, #141414 92.01%);",
      }),
      backgroundColor: (theme) => ({
        'button-hover': '#323232',
      }),
    },
  },
  plugins: [],
}
