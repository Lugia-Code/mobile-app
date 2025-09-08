import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "../context/ThemeContext";

export default function Cabecalho({ title, iconName, onIconPress }) {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      <TouchableOpacity onPress={onIconPress} style={{ height: 32 }}>
        <MaterialIcons
          name={iconName}
          size={32}
          style={{ color: colors.border }}
        />
      </TouchableOpacity>
      <Text style={[styles.title, { color: colors.border }]}>{title}</Text>
      <View style={{ width: 28 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    paddingTop: 56,
    justifyContent: "space-between",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "500",
  },
});
