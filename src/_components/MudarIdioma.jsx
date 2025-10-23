import { StyleSheet, TouchableOpacity, Text } from "react-native";
import I18n from "../services/i18n";
import { useState } from "react";

export default function MudarIdioma() {
  const [idx, setIdx] = useState(0);
  const langs = ["es", "pt"];

  const mudarIdioma = () => {
    setIdx((prevIdx) => prevIdx + 1);
    console.log(idx);
    I18n.changeLanguage(langs[idx]);

    if (idx >= 1) {
      setIdx(0);
    }
  };

  return (
    <>
      <TouchableOpacity onPress={mudarIdioma}>
        <Text>{langs[idx]}</Text>
      </TouchableOpacity>
    </>
  );
}
