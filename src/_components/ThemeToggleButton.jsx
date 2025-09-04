import { TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";

export default function ThemeToggleButton() {
  const { toggleTheme, colors, theme } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors.button }]}
      onPress={toggleTheme}
    >
      <Ionicons
        name={theme == "light" ? "sunny" : "moon"}
        size={32}
        color="#000"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
