/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#191919",
      "background-light": "#262626",
      primary: "#977ECE",
      "primary-hover": "#473399",
      secondary: "#252525",
      "secondary-hover": "#3B3B3B",
      foreground: "#ffffff",
      "foreground-dark": "#A3A3A3",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      sg: ["Space Grotesk", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
