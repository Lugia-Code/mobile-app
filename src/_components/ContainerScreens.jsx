import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../context/ThemeContext";
import ThemeToggleButton from "./ThemeToggleButton";
import MudarIdioma from "./MudarIdioma";

export default function ContainerScreens({ children }) {
  const { colors } = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <ThemeToggleButton />
      <MudarIdioma />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "flex-start",
    paddingHorizontal: "12%",
  },
});
