/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      color: {
        "--primary-bgColor": "#eaeaea",
        "--primary-fontColor": "#373737",
        "--secondary-bgColor": "#fbfbfb",
        "--secondary-fontColor": "#515151",
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
