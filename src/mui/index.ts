import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#C8E972",
    },
    secondary: {
      main: "#222324",
    },
    info: {
      main: "#242424",
    },
  },
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"', // eslint-disable-line
      "Roboto",
      '"Helvetica Neue"', // eslint-disable-line
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"', // eslint-disable-line
      '"Segoe UI Emoji"', // eslint-disable-line
      '"Segoe UI Symbol"', // eslint-disable-line
    ].join(","),
  },
});

export default theme;
