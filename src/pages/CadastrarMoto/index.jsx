import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import Btn from "../../_components/Btn";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../../_components/Cabecalho";
import { logOut } from "../../utils/navigation";
import Cabecalho from "../../_components/Cabecalho";
import ContainerScreens from "../../_components/ContainerScreens";

const modelosDisponiveis = ["Mottu Sport", "Honda Pop 110I", "Mottu Sport ESD"];

const setoresDisponiveis = [
  { nome: "Pronta para aluguel", icone: "checkmark-circle" },
  { nome: "Pendente", icone: "time-sharp" },
  { nome: "Sem placa", icone: "close-circle" },
  { nome: "Danos estruturais graves", icone: "warning" },
  { nome: "Reparo simples", icone: "construct" },
  { nome: "Agendada para manutenção", icone: "calendar" },
  { nome: "Motor defeituoso", icone: "cog" },
  { nome: "Minha Mottu", icone: "person" },
];

export default function CadastrarMoto({ navigation }) {
  const [placa, setPlaca] = useState("");
  const [chassi, setChassi] = useState("");
  const [modeloSelecionado, setModeloSelecionado] = useState("");
  const [setorSelecionado, setSetorSelecionado] = useState("");

  const cadastrarMoto = async () => {
    if (
      !placa.trim() ||
      !chassi.trim() ||
      !modeloSelecionado ||
      !setorSelecionado
    ) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    const novaMoto = {
      placa,
      chassi,
      modelo: modeloSelecionado,
      setor: setorSelecionado,
    };

    try {
      const dadosSalvos = await AsyncStorage.getItem("@motos");
      const motos = dadosSalvos ? JSON.parse(dadosSalvos) : [];
      motos.push(novaMoto);
      motos.forEach((moto, index) => {
        console.log(`Moto ${index + 1}:`, moto);
      });

      await AsyncStorage.setItem("@motos", JSON.stringify(motos));
      Alert.alert("Sucesso", "Moto cadastrada com sucesso!");

      setPlaca("");
      setChassi("");
      setModeloSelecionado("");
      setSetorSelecionado("");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível cadastrar a moto.");
    }
  };

  return (
    <>
      <Cabecalho
        title="Cadastrar moto"
        iconName="logout"
        onIconPress={() => logOut(navigation)}
      />
      <ContainerScreens>
        <ScrollView keyboardShouldPersistTaps="handled">
          <Text style={styles.label}>Placa</Text>
          <TextInput
            style={styles.input}
            placeholder="Informe a placa"
            placeholderTextColor="#666"
            value={placa}
            onChangeText={setPlaca}
          />
          <View style={styles.underline} />

          <Text style={styles.label}>Chassi</Text>
          <TextInput
            style={styles.input}
            placeholder="Informe o chassi"
            placeholderTextColor="#666"
            value={chassi}
            onChangeText={setChassi}
          />
          <View style={styles.underline} />

          <Text style={styles.label}>Modelo da moto</Text>
          <FlatList
            scrollEnabled={false}
            data={modelosDisponiveis}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.modeloItem,
                  modeloSelecionado === item && styles.modeloItemSelecionado,
                ]}
                onPress={() => setModeloSelecionado(item)}
              >
                <Text
                  style={[
                    styles.modeloTexto,
                    modeloSelecionado === item && styles.modeloTextoSelecionado,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />

          <Text style={[styles.label, { marginTop: 30 }]}>
            Direcionar para setor
          </Text>
          <FlatList
            scrollEnabled={false}
            data={setoresDisponiveis}
            keyExtractor={(item) => item.nome}
            renderItem={({ item }) => {
              const selecionado = setorSelecionado === item.nome;
              return (
                <TouchableOpacity
                  onPress={() => setSetorSelecionado(item.nome)}
                  style={[
                    setorStyles.container,
                    selecionado && setorStyles.containerSelecionado,
                  ]}
                >
                  <Text
                    style={[
                      setorStyles.nome,
                      selecionado && setorStyles.nomeSelecionado,
                    ]}
                  >
                    {item.nome}
                  </Text>
                  <Ionicons
                    name={item.icone}
                    size={30}
                    color={selecionado ? "#22c55e" : "#d1d9e6"}
                    marginHorizontal={30}
                  />
                  {selecionado && (
                    <View
                      style={[
                        setorStyles.barraCor,
                        { backgroundColor: "#22c55e" },
                      ]}
                    />
                  )}
                </TouchableOpacity>
              );
            }}
          />

          <Btn txt="Cadastrar" pressFunc={cadastrarMoto} />
        </ScrollView>
      </ContainerScreens>
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "#F97316",
    fontSize: 16,
    marginBottom: 5,
    marginTop: 20,
  },
  input: {
    color: "white",
    fontSize: 16,
    paddingVertical: 8,
  },
  underline: {
    height: 1,
    backgroundColor: "#F97316",
    marginBottom: 15,
  },
  modeloItem: {
    backgroundColor: "#1a2639",
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#d1d9e6",
  },
  modeloItemSelecionado: {
    borderColor: "#22c55e",
  },
  modeloTexto: {
    color: "#d1d9e6",
    fontSize: 18,
    fontWeight: "600",
  },
  modeloTextoSelecionado: {
    color: "#22c55e",
  },
});

const setorStyles = StyleSheet.create({
  container: {
    backgroundColor: "#1a2639",
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d1d9e6",
    position: "relative",
  },
  containerSelecionado: {
    borderColor: "#22c55e",
  },
  nome: {
    fontSize: 18,
    fontWeight: "600",
    color: "#d1d9e6",
    flex: 1,
  },
  nomeSelecionado: {
    color: "#22c55e",
  },
  barraCor: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "5%",
    height: "202%",
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
});
