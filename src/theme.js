import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        black: {
          100: "#d3d3d3",
          200: "#a7a7a8",
          300: "#7b7a7c",
          400: "#4f4e51",
          500: "#2f2f2f",
          600: "#1c1b1e",
          700: "#151416",
          800: "#0e0e0f",
          900: "#070707",
        },
        primary: {
          100: "#d9d9d9",
          200: "#b3b3b3",
          300: "#8e8e8e",
          400: "#686868",
          500: "#2f2f2f",
          600: "#353535",
          700: "#282828",
          800: "#1a1a1a",
          900: "#0d0d0d",
        },
        greenAccent: {
          100: "#d2f1ed",
          200: "#a5e4db",
          300: "#77d6c9",
          400: "#4ac9b7",
          500: "#1dbba5",
          600: "#179684",
          700: "#117063",
          800: "#0c4b42",
          900: "#062521",
        },
        grey: {
          100: "#f1f1f1",
          200: "#e3e3e3",
          300: "#d4d4d4",
          400: "#c6c6c6",
          500: "#acacac",
          600: "#939393",
          700: "#6e6e6e",
          800: "#4a4a4a",
          900: "#252525",
        },
        secondary: {
          100: "#dddddd",
          200: "#bbbbbb",
          300: "#989898",
          400: "#767676",
          500: "#545454",
          600: "#434343",
          700: "#323232",
          800: "#222222",
          900: "#111111",
        },
      }
    : {
        black: {
          100: "#070707",
          200: "#0e0e0f",
          300: "#151416",
          400: "#1c1b1e",
          500: "#232225",
          600: "#4f4e51",
          700: "#7b7a7c",
          800: "#a7a7a8",
          900: "#d3d3d3",
        },
        primary: {
          100: "#0d0d0d",
          200: "#1a1a1a",
          300: "#282828",
          400: "#353535",
          500: "#424242",
          600: "#686868",
          700: "#8e8e8e",
          800: "#b3b3b3",
          900: "#d9d9d9",
        },
        greenAccent: {
          100: "#062521",
          200: "#0c4b42",
          300: "#117063",
          400: "#179684",
          500: "#1dbba5",
          600: "#4ac9b7",
          700: "#77d6c9",
          800: "#a5e4db",
          900: "#d2f1ed",
        },
        grey: {
          100: "#252525",
          200: "#4a4a4a",
          300: "#6e6e6e",
          400: "#939393",
          500: "#b8b8b8",
          600: "#c6c6c6",
          700: "#d4d4d4",
          800: "#e3e3e3",
          900: "#f1f1f1",
        },
        secondary: {
          100: "#111111",
          200: "#222222",
          300: "#323232",
          400: "#434343",
          500: "#545454",
          600: "#767676",
          700: "#989898",
          800: "#bbbbbb",
          900: "#dddddd",
        },
      }),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[400],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[400],
              light: colors.grey[100],
            },
            profile: {
              main: "#1994fc",
            },
            background: {
              default: "#212121",
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.secondary[400],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[400],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
