/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: '#118170',
        yellow: '#FFC03A',
        typo: {
          primary: '#173330'
        }
      }
    },
    container: {
      center: true,
      padding: "24px",
    }
  },
  plugins: [],
}

