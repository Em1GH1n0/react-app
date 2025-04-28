// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2", // azul default
    },
    secondary: {
      main: "#dc004e", // rojo fucsia<ThemeProvider theme={theme}>
    },
    background: {
      default: "#000000", // Fondo negro
      paper: "#121212", // Fondo de tarjetas, dialogos, etc (opcional)
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
  components: {
    MuiBox: {
      styleOverrides: {
        root: {
          width: "100%",
          flexShrink: 0, // Evita compresión no deseada
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(3),
          "&:last-child": {
            paddingBottom: theme.spacing(3), // Elimina el padding inferior por defecto
          },
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }),
      },
    },
  },
});

export default theme;
