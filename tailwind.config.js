/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'custom-lime': '#173400',
        'custom-dark': '#173401',
        'base-white': '#FFFFFF',
        'base-layer': '#212121',
      },
      fontFamily: {
        cabinet: ["var(--font-cabinet)"],

      },
      backgroundImage: {
        'noise-pattern': "url('/public/noise-bg.png')",
      }
    },
  },
  plugins: [],
}
