/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores inspiradas na Masala e maquinário pesado
        construct: {
          dark: "#121212",    // Preto asfalto
          yellow: "#FFB800",  // Amarelo trator (Caterpillar)
          gray: "#4A4A4A",    // Cinza concreto
        }
      }
    },
  },
  plugins: [],
}