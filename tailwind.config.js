const flowbite = require("flowbite-react/tailwind");
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),

  ],
  theme: {
      fontFamily: {
          sans: ["Figtree", ...defaultTheme.fontFamily.sans],
          midnight: ['"Midnight"', ...defaultTheme.fontFamily.sans],

      },
      scale: {
          '70': '.70',
      },
      colors:{
          primary: '#9E0B26',
          secondary: '#C9C4C0',
      },
      backgroundImage: {
          'concrete-50': "url('/src/assets/images/bg/concrete-50.png')",
      },
    
  },
  plugins: [
    flowbite.plugin(),

  ],
}