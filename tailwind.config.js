/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'swiss-coffee': '#E0DDDB',
        'raw-sienna': '#D58A47',
        'cocoa-brown': '#191314',
        'tuscany': '#B65B2A'
      },
    },
  },
  plugins: [],
}
