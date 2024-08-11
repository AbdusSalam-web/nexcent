/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      openSans: ["Open Sans", " sans-serif"],
    },
    extend: {
      colors: {
        text_clr: "#4CAF4F",
        linkClr: "#18191F",
        heroBgClr: "#F5F7FA",
        new: "#4D4D4D",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
