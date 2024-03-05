/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '20px',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        primary: '#4e78b6',
        secondary: '#a9cffc',
        accent: {
          DEFAULT: '#020C19',
          secondary: '#18abbc',
          tertiary: '#508c3b',
        },
        grey: '#e8f0f1',
      },
      fontFamily: {
        primary: 'Montserrat, sans-serif;',
      },
      boxShadow: {
        custom1: '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
        custom2: '0px 0px 30px 0px rgba(8, 73, 81, 0.06)',
      },
      backgroundImage: {
        services: 'url(../../assets/img/services/bg.svg)',
        testimonials: 'url(../../assets/img/testimonials/bg.svg)',
        departments: 'url(../../assets/img/departments/bg.svg)',
        quoteLeft: 'url(../../assets/icons/testimonials/quote-left.svg)',
        quoteRight: 'url(../../assets/icons/testimonials/quote-right.svg)',
      },
    },
  },
  plugins: [],
};
