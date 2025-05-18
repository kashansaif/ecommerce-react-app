/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "red-950": "#6B0F0F", // You can use any hex code for the color you want
      },
    },
  },
  plugins: [],
};
