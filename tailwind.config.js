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
        'bannerCities': "url('https://png.pngtree.com/background/20230309/original/pngtree-city-%E2%80%8B%E2%80%8Bstreet-night-cartoon-buildings-scenery-background-picture-image_2108360.jpg')",
        'notFound': "url('https://media.istockphoto.com/id/466240347/es/vector/error-404.jpg?s=170667a&w=0&k=20&c=LTep6tzJZJH0MK7au4q1qL6eKFlFNLdUuX8owKMmvHg=')",
        'notFoundMobile':"url('https://www.emizentech.com/blog/wp-content/uploads/sites/2/2021/09/404-page-for-your-E-commerce-store-1.png')",
        'signInBg':"url('https://img.freepik.com/fotos-premium/espacio-colonia-grand-theft-fondo-pantalla-cyberpunk-vaporwave-ai-generativo-aig15_31965-135455.jpg')",
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

