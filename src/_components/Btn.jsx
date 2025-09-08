import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { useTheme } from "../context/ThemeContext";

export default function Btn({ txt, pressFunc }) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={pressFunc}
      style={[styles.button, { backgroundColor: colors.primary }]}
    >
      <Text style={[styles.buttonText, { color: colors.text }]}>{txt}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 54,
    marginHorizontal: 30,
    paddingInline: 24,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
