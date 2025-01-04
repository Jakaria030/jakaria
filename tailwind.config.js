/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "ubuntu": ["Ubuntu", "serif"],
        "poppins": ["Poppins", "serif"],
      },
      colors: {
        "crimson": "#ed143d",
        "dark": "#111111",
      },
      backgroundImage: {
        "banner": "url('./src/assets/banner.png')",
      }
    },
  },
  plugins: [require("daisyui")],
}