/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroBg': "url('https://fondosmil.com/fondo/85131.jpg')",
      },
      dropShadow: {
        'lightShadow': '0.5px 1px 0.5px rgba(255,255,255,10)',
        'darkShadow': '2px 2px 2px rgba(0, 0, 0, 10)'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}

