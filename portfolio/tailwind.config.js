/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "5/7": "5 / 7",
        "16/10": "16 / 10",
      },
    },
  },
  plugins: [],
};
