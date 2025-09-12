import { useState } from "react";
import { StyleSheet, View, Text, TextInput, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Btn from "../../_components/Btn";
import Header from "../../_components/Cabecalho";
import { logOut } from "../../utils/navigation";
import Cabecalho from "../../_components/Cabecalho";
import ContainerScreens from "../../_components/ContainerScreens";
import { useTheme } from "../../context/ThemeContext";

export default function ProurarMoto({ navigation }) {
  const { colors } = useTheme();
  const [chassi, setChassi] = useState("");
  const [placa, setPlaca] = useState("");

  const handleFindChassi = () => {
    console.log("Buscando moto com chassi:", chassi);
  };

  const handleFindPlate = () => {
    console.log("Buscando moto com placa:", placa);
  };

  return (
    <>
      <Cabecalho
        title="Buscar Moto"
        iconName="logout"
        onIconPress={() => logOut(navigation)}
      />
      <ContainerScreens>
        <View style={styles.searchContainer}>
          <View
            style={[styles.inputContainer, { backgroundColor: colors.surface }]}
          >
            <Ionicons
              name="search"
              size={20}
              color={colors.text}
              style={styles.searchIcon}
            />
            <TextInput
              style={{ color: colors.textSecondary }}
              placeholder="Informe o chassi da moto"
              placeholderTextColor={colors.textSecondary}
              value={chassi}
              onChangeText={setChassi}
            />
          </View>
          <Text style={[styles.ouText, { color: colors.text }]}>ou</Text>
          <View
            style={[styles.inputContainer, { backgroundColor: colors.surface }]}
          >
            <Ionicons
              name="search"
              size={20}
              color={colors.text}
              style={styles.searchIcon}
            />
            <TextInput
              style={{ color: colors.textSecondary }}
              placeholder="Informe a placa da moto"
              placeholderTextColor={colors.textSecondary}
              value={placa}
              onChangeText={setPlaca}
            />
          </View>
          <Btn txt="Buscar" />
        </View>
      </ContainerScreens>
    </>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    padding: 22,
    alignItems: "center",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    paddingVertical: 13,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderWidth: 1.5,
    width: "100%",
  },
  searchIcon: {
    marginHorizontal: 10,
  },
  input: {
    fontSize: 22,
    fontWeight: "500",
  },
  ouText: {
    fontSize: 18,
    fontWeight: "700",
  },
});
