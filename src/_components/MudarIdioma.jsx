import { TouchableOpacity, Text } from "react-native";
import I18n from "../services/i18n";
import { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "../context/ThemeContext";
import { saveLanguage, loadLanguage } from "../services/i18n";

export default function MudarIdioma() {
  const [idx, setIdx] = useState(0);
  const { colors } = useTheme();

  const langs = ["pt", "es"];

  useEffect(() => {
    const carregarIdioma = async () => {
      const savedLang = await loadLanguage();
      const savedIdx = langs.indexOf(savedLang);
      if (savedIdx !== -1) {
        setIdx(savedIdx);
        I18n.changeLanguage(savedLang);
      }
    };
    carregarIdioma();
  }, []);

  const mudarIdioma = async () => {
    const novoIdx = idx === 0 ? 1 : 0;
    const novoLang = langs[novoIdx];

    await I18n.changeLanguage(novoLang);
    await saveLanguage(novoLang);

    setIdx(novoIdx);
  };

  return (
    <TouchableOpacity
      onPress={mudarIdioma}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
      }}
    >
      <FontAwesome
        name="exchange"
        size={14}
        style={{ marginTop: 6 }}
        color={colors.primary}
      />
      <Text
        style={{
          fontSize: 22,
          color: colors.primary,
          marginRight: "4%",
          width: 30,
        }}
      >
        {langs[idx]}
      </Text>
    </TouchableOpacity>
  );
}
