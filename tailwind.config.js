/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'xl': ['32px','40px']
    },
    extend: {
      colors: {
        white: {
          base: '#fff',
          medium: '#f9f8f8'
        },
        grey: {
          md: '#f9f8f8'
        },
        black: {
          base: '#d4af37'
        }
      },
      textColor: {
        black: {
          base: '#1e1f21',
          light: '#6d6e6f'
        }
      },
      boxShadow: {
        large: '0 5px 20px 0 rgba(109, 110, 111, 0.08)'
      },
      fontFamily: {
        'body': ['-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Helvetica,Arial,sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
