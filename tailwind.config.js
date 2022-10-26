/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        blue: "#14213d",
        yellow: "#fca311",
        gray: "#e5e5e5",
        "gray-2": "#212529",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
