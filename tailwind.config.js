/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        marrom: "#5C4033",
        preto: "#1A1A1A",
        laranja: "#FF7A00",
        azulEscuro: "#0F172A",
      },
    },
  },
  plugins: [],
}