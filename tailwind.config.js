/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
      sm: '640px',   // Small devices (phones in landscape, large phones)
      md: '768px',   // Medium devices (tablets)
      lg: '1024px',  // Large devices (small laptops)
      xl: '1280px',  // Extra large devices (desktops)
     '2xl': '1536px', // 2x Extra large devices (big monitors)
    },
     fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        worksans: ['Work Sans', 'sans-serif'],
        bitcount: ['Bitcount Prop Single Ink', 'sans-serif'],
        
      },
    },
  },
  plugins: [],
}

