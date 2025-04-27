// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2", // azul default
    },
    secondary: {
      main: "#dc004e", // rojo fucsia
    },
    background: {
      default: "#000000", // Fondo negro
      paper: "#121212", // Fondo de tarjetas, dialogos, etc (opcional)
    },
  },
  // breakpoints: {
  //   values: {
  //     laptop: 1024,
  //     tablet: 640,
  //     mobile: 0,
  //     desktop: 1280,
  //   },
  // },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default theme;
