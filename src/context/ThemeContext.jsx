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
      background: "#fff",
      text: "yellow",
      button: "white",
      buttonText: "#fff",
    },
    dark: {
      background: "#121212",
      text: "#fff",
      button: "yellow",
      buttonText: "#111",
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
