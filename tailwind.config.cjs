/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
   extend: {
      fontFamily: {
        // font nào chữ l cong 1 xíu   viet giup toi 
        // barlow: [ '"PT Sans"'],
        // Ubuntu
        barlow: [ '"Hanken Grotesk"'],

      }
    },
  },
  plugins: []
}