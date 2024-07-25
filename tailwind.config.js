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
          primary: '#981915',
          secondary: '#C9C4C0',
          "black-25": 'rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
          'concrete-50': "url('/src/assets/images/bg/concrete-50.png')",
          'fondo-mapi': "url('/src/assets/images/bg/fondo-mapi.png')",
          'textura-gris': "url('/src/assets/images/bg/textura-gris.webp')",

      },
    
  },
  plugins: [
    flowbite.plugin(),

  ],
}