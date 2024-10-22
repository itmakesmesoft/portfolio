/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-primary": "#eaeaea",
        "light-secondary": "#fbfbfb",
        "dark-primary": "#373737",
        "dark-secondary": "#515151",
      },
      aspectRatio: {
        "3/2": "3 / 2",
        "5/7": "5 / 7",
        "16/10": "16 / 10",
      },
    },
  },
  plugins: [],
};
