/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        grayish: "#3D3D3D",
        red: "#ff0038",
        cinza: "#EDEDED",
        brancoamarelado: "FFFCF9",
        preto: "1A1A1A",
        cinzaTexto: "7C7878",
      },
    },
  },
  plugins: [],
};
