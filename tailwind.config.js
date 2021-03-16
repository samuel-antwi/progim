module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        futura: ['Futura', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      textColor: (theme) => theme('colors'),
      textColor: {
        primary: '#e31c6d',
        secondary: '#11ccc9',
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: '#252a35',
      }),
      borderColor: (theme) => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        primary: '#252a35',
      }),
      screens: {
        xxs: '280px',
        xs: '360px',
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
      maxHeight: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
