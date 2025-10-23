import { TouchableOpacity, Text } from "react-native";
import I18n from "../services/i18n";
import { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "../context/ThemeContext";

export default function MudarIdioma() {
  const [idx, setIdx] = useState(0);
  const { colors } = useTheme();

  const langs = ["pt", "es"];

  const mudarIdioma = () => {
    const novoIdx = idx === 0 ? 1 : 0;

    I18n.changeLanguage(langs[novoIdx]);

    setIdx(novoIdx);
  };

  return (
    <>
      <TouchableOpacity
        onPress={mudarIdioma}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "6%",
        }}
      >
        <FontAwesome
          name="exchange"
          size={14}
          style={{ marginTop: 6 }}
          color={colors.primary}
        />
        <Text style={{ fontSize: 22, color: colors.primary }}>
          {langs[idx]}
        </Text>
      </TouchableOpacity>
    </>
  );
}
