/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        lmBg: "#f6f8ff",
        lmBgContent: "#fefefe",
        lmText: "#4b6a9b",
        lmTextAlt: "#2b3442",
        btn: "#0079ff",
        btnHover: "#60abff",
      },
      boxShadow: {
        lmShadow: "0px 16px 30px -10px rgba(70,96,187,0.2)",
      },
      brightness: {
        lmIconBg: "100%",
      },
    },
  },
  plugins: [],
};
