/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        padding: "1rem",
        center: true,
      },
      fontFamily: {
        'Roboto':['Roboto','sans-serif'],
        'Arima': ['Arima Madurai', 'cursive'],
      },
      keyframes: {
        slideDown: {
          '0%, 100%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        slideDown: 'slideDown .4s ease-in-out',
      },
    },
  },
  plugins: [],
}

