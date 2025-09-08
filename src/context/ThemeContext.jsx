import { createContext, useContext, useState } from "react";
import { Appearance } from "react-native";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const colorTheme = Appearance.getColorScheme();

  const [theme, setTheme] = useState(colorTheme || "light");

  const toggleTheme = () => {
    setTheme((value) => (value === "light" ? "dark" : "light"));
  };

  const themeColors = {
    light: {
      background: "#F4F7FA",
      surface: "#C0C0C0",
      text: "#222B32",
      textSecondary: "#4A5468",
      danger: "#DD3C2F",
      primary: "#179A46",
      secondary: "#39E96E",
      border: "#DDE3E9",
    },
    dark: {
      background: "#151C26",
      surface: "#202938",
      text: "#FFFFFF",
      textSecondary: "#C4CBD5",
      danger: "#F64A3A",
      primary: "#30D158",
      secondary: "#39E96E",
      border: "#2D3748",
    },
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, colors: themeColors[theme] }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
