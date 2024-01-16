/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "3/2": "3 / 2",
        "5/7": "5 / 7",
        "16/10": "16 / 10",
      },
    },
  },
  plugins: [],
};
