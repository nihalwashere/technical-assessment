module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-inset": "inset 0px 0px 12.7px 0px #FFFFFF0D",
      },
      colors: {
        "white-1": "FDFDFDFD",
        "white-2": "#FCFCFC",

        "black-1": "#161618",
        "black-2": "#222324",
        "black-3": "#242424",
        "black-4": "#5A5A5A",
        "black-5": "#2C2E334D",

        "green-1": "#DCFF7FFD",
        "green-2": "#C9FF3B",
        "green-3": "#B3E237",
        "green-4": "#C8E972",
        "green-5": "#577113",

        "grey-1": "#BBBBBB",
        "grey-2": "#B9B9B9",
        "grey-3": "#525252",
        "grey-4": "#5A5A5AA1",
        "grey-5": "#888888",
        "grey-6": "#878787",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
