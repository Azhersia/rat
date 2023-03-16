/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgLight': '#DCEADD',
        'bgDark': '#3E463F',
        'mainGreen': '#788872',
        'mainGreenDarker': '#65705f',
        'secondaryGreen': '#93AD99',
        'secondaryShadow': '#5A6F5D',
        'thirdGreen': '#6F8574',
        'chaseRed': '#C55748',
        'shadowRed': '#832518',
      },
      spacing: {
        '500': '500px',
        '700': '700px',
        '300': '30rem',
        '200': '20rem',
        '150': '15rem',
        '90': '40rem',
      }
    },
  },
  plugins: [],
}
