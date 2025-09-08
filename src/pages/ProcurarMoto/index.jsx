import { useState } from "react";
import { StyleSheet, View, Text, TextInput, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Btn from "../../_components/Btn";
import Header from "../../_components/Cabecalho";
import { logOut } from "../../utils/navigation";
import Cabecalho from "../../_components/Cabecalho";

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
      <SafeAreaView style={styles.container}>
        <View style={styles.scrollContainer}>
          <View style={styles.searchContainer}>
            <Text style={styles.sectionTitle}>Buscar moto</Text>

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
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a2639",
    paddingTop: "12%",
  },

  scrollContainer: {
    flex: 1,
  },
  searchContainer: {
    padding: 20,
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
