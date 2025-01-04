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
      },
      maxWidth: {
        "8xl": "90rem",
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