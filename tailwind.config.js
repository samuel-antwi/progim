module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        futura: ['Futura', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      textColor: (theme) => theme('colors'),
      textColor: {
        primary: '#ea4d22',
        // primary: '#5950EA',
        secondary: '#11ccc9',
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: '#ea4d22',
        // primary: '#5950EA',
        light: '#f8f8f8',
        btn_hover: '#B84600',
      }),
      borderColor: (theme) => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        primary: '#ea4d22',
      }),
      screens: {
        xxs: '280px',
        xs: '360px',
        xxm: '580px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      container: {
        center: true,
        padding: '1.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
