/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F8F9FA",
        secondary: "#4FD1C5",
        grey400: "#A0AEC0",
        green400: "#48BB78",
      },
      fontFamily: {
        helvetica: ["Helvetica", "Inter", "Arial", "serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    backgroundImage: {
      "hero-1": "url('/image-background-1.png')",
      "card-purity": "url('/card-background.svg')",
      "radar-2": "url('/radar-background-2.svg')",
      "green-pattern": "url('/green-pattern-background.svg')",
    },
  },
  plugins: [],
  mode: "jit",
};
