import { createContext, useContext, useState, useEffect } from "react";
import { Appearance } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

const THEME_KEY = "@app_theme";

const saveTheme = async (theme) => {
  try {
    await AsyncStorage.setItem(THEME_KEY, theme);
  } catch (error) {
    console.error("Erro ao salvar tema:", error);
  }
};

const loadTheme = async () => {
  try {
    const savedTheme = await AsyncStorage.getItem(THEME_KEY);
    return savedTheme || Appearance.getColorScheme() || "light";
  } catch (error) {
    console.error("Erro ao carregar tema:", error);
    return Appearance.getColorScheme() || "light";
  }
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const initTheme = async () => {
      const savedTheme = await loadTheme();
      setTheme(savedTheme);
    };
    initTheme();
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    await saveTheme(newTheme);
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
