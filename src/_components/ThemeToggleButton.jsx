import { TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext";
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
        size={34}
        color="#000"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 100,
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
