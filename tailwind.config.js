/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        primaryText: '#1e1f21'
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
