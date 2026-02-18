/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'DM Sans', 'sans-serif'],
      },

      colors: {
        colorCodGray: '#191919',
        colorOrangyRed: '#F37021',
        colorLinenRuffle: '#EFEAE3',
        colorViolet: '#321CA4',
        colorGreen: '#39FF14',
      },
    },
  },
  plugins: [],
};
