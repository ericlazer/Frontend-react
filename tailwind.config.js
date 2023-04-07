/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'gradient-image': "linear-gradient(107.86deg, #1C1C1C 7.16%, #171717 108.66%);",
      }),
    },
  },
  plugins: [],
}
