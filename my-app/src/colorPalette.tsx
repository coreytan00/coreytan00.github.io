import { createTheme } from "@mui/material/styles";

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: "#BB86FC" //light purple
    },
    secondary: {
      main: "#03DAC6" //neon turquoise
    },
    // primaryLight: {
    //   main: green[50]
    // }
  },
  typography: {
    fontFamily: 'Open Sans, sans-serif', // Apply Open Sans font to the entire app
  },
});