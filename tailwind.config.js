/** @type {import('tailwindcss').Config} */
module.exports =  {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['"Outfit"', 'monospace'],
        'young-serif': ['"Young Serif"', 'sans-serif']
      },
      screens: {
        'xs': '576px',
        '2xs': '440px',
        '3xs': '375px',
      }
    },
  },
  plugins: [
    
  ]
}

