import { useState } from "react";
import { StyleSheet, View, Text, TextInput, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Btn from "../../_components/Btn";
import Header from "../../_components/Cabecalho";
import { logOut } from "../../utils/navigation";
import Cabecalho from "../../_components/Cabecalho";
import ContainerScreens from "../../_components/ContainerScreens";

export default function ProurarMoto({ navigation }) {
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
          <View style={styles.inputContainer}>
            <Ionicons
              name="search"
              size={20}
              color="#888"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Informe o chassi da moto"
              placeholderTextColor="#888"
              value={chassi}
              onChangeText={setChassi}
            />
          </View>
          <Text style={styles.ouText}>ou</Text>
          <View style={styles.inputContainer}>
            <Ionicons
              name="search"
              size={20}
              color="#888"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Informe a placa da moto"
              placeholderTextColor="#888"
              value={chassi}
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
  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    alignSelf: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    width: "100%",
  },
  searchIcon: {
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 45,
    padding: 10,
    color: "#333",
  },
  ouText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});
