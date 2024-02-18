/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
         primaryColor:"#8867FF",
        yellowColor:"#FEB60D",
        purpuleColor:"#97771FF",
        irisBlueColor:"#0185C5",
        headingColor:"#181A1E",
        textColor:"#4E545F",
      },
      boxShadow: {
        panelShadow: "rgba(17,12,46,0.15) 0px 48px 100px 0px",
      },
    },
  },
  plugins: [],
};
