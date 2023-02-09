/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      logo: ['Fira Sans', 'sans-serif']
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '2rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '4rem',
      '7xl': '4.625rem',
      '8xl': '6.25rem',
      '9xl': '10.375rem',
    },
    colors: {
      'dark': '#282728',
      'light': '#F0F0F0',
      'gray': '#C4C4C4',
      'white': '#FFFFFF',
      'orange': '#FE9B07',
    },
    extend: {},
  },
  plugins: [],
}
