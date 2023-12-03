/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        ground: "#f3f2f9",
        "first-ground": "#7B66FF",
        "second-ground": "#5FBDFF",
        "third-ground": "#96EFFF",
        "fourth-ground": "#C5FFF8",
        "five-ground": "#",
      },
    },
  },
  plugins: [],
};
