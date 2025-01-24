/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        childos: ['"Childos Arabic DEMO Light"', "sans-serif"],
        adamScript: ['"Adam Script"', "cursive"],
        sindbad: ['"Sindbad"', "sans-serif"],
        xbShafigh: ['"XB Shafigh"', "sans-serif"],
        amiri: ['"Amiri"', "serif"],
        cairo: ['"Cairo"', "sans-serif"],
        droid: ['"Droid"', "sans-serif"],
        notoNaskh: ['"Noto Naskh Arabic"', "serif"],
        scheherazade: ['"ScheherazadeNew"', "serif"],
        allura: ["Allura", "cursive"],
        mada: ["Mada", "sans-serif"],
        notokufiarabic: ["Noto Kufi Arabic", "sans-serif"],
        dancingScript: ["Dancing Script", "cursive"],
        greatVibes: ["Great Vibes", "cursive"],
        tajawal: ["Tajawal", "sans-serif"],
        reemkufi: ["Reem Kufi", "sans-serif"],
        lemonada: ["Lemonada", "sans-serif"],
        lateef: ["Lateef", "serif"],
        harmattan: ["Harmattan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
