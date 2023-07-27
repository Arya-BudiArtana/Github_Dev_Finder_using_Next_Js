/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
    theme: {
      extend: {
        animation: {
          wiggle: 'wiggle 1s ease-in-out ',
          wiggle_reverse:'wiggle_reverse 0.3s ease-in'
        },
  
        keyframes: {
          wiggle: {
            '0%, 100%': { transform: 'rotate(-60deg)' },
            '50%': { transform: 'rotate(60deg)' },
          },
          wiggle_reverse:{
            '0%': { transform: 'rotate(90deg)' },
            '100%': { transform: 'rotate(0deg)' },
          }
        }
      },
    },
    darkMode:"class",
    plugins: [],
  }
  
