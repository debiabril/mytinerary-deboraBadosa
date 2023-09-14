/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroBg': "url('https://png.pngtree.com/thumb_back/fw800/background/20210903/pngtree-steam-wave-seaside-coconut-tree-blue-steam-wave-art-image_796149.jpg')",
        'bannerCities': "url('https://png.pngtree.com/background/20230309/original/pngtree-city-%E2%80%8B%E2%80%8Bstreet-night-cartoon-buildings-scenery-background-picture-image_2108360.jpg')",
        'notFoundMobile':"url('https://www.emizentech.com/blog/wp-content/uploads/sites/2/2021/09/404-page-for-your-E-commerce-store-1.png')",
        'signInBg':"url('https://static.vecteezy.com/system/resources/previews/007/207/818/non_2x/futuristic-technological-grid-background-digital-futurist-cyber-space-design-cyberpunk-technology-virtual-reality-science-fiction-matrix-science-light-perspective-wallpaper-illustration-free-vector.jpg')",
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

