import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Btn from "../../_components/Btn";
import Cabecalho from "../../_components/Cabecalho";
import { logOut } from "../../utils/navigation";
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
  const [temPlaca, setTemPlaca] = useState(true);
  const [placa, setPlaca] = useState("");
  const [chassi, setChassi] = useState("");
  const [modeloSelecionado, setModeloSelecionado] = useState("");
  const [setorSelecionado, setSetorSelecionado] = useState("");
  const [tag, setTag] = useState("");

  const cadastrarMoto = async () => {
    if (
      (temPlaca && !placa.trim()) ||
      !chassi.trim() ||
      !modeloSelecionado ||
      !setorSelecionado ||
      !tag.trim()
    ) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    // ... (lógica de salvar permanece igual)
  };

  return (
    <>
      <Cabecalho
        title="Cadastrar Moto"
        iconName="logout"
        onIconPress={() => logOut(navigation)}
      />
      <ContainerScreens>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 34 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.checkboxRow}>
            <Pressable
              onPress={() => setTemPlaca(!temPlaca)}
              style={styles.checkboxBase}
            >
              {temPlaca && (
                <View style={styles.checkboxChecked}>
                  <Ionicons name="checkmark" size={18} color="#fff" />
                </View>
              )}
            </Pressable>
            <Text style={styles.checkboxLabel}>Essa moto tem placa?</Text>
          </View>

          {temPlaca && (
            <>
              <Text style={styles.label}>Placa</Text>
              <TextInput
                style={styles.input}
                placeholder="Informe a placa"
                placeholderTextColor="#888"
                value={placa}
                onChangeText={setPlaca}
                autoCapitalize="characters"
                maxLength={8}
              />
            </>
          )}

          <Text style={styles.label}>Chassi</Text>
          <TextInput
            style={styles.input}
            placeholder="Informe o chassi"
            placeholderTextColor="#888"
            value={chassi}
            onChangeText={setChassi}
          />

          <Text style={styles.label}>Modelo da moto</Text>
          {modelosDisponiveis.map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.modeloBtn,
                modeloSelecionado === item && styles.modeloBtnAtivo,
              ]}
              onPress={() => setModeloSelecionado(item)}
            >
              <Text
                style={[
                  styles.modeloTexto,
                  modeloSelecionado === item && styles.modeloTextoAtivo,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}

          <Text style={[styles.label, { marginTop: 22 }]}>
            Direcionar para setor
          </Text>
          {setoresDisponiveis.map((item) => {
            const selecionado = setorSelecionado === item.nome;
            return (
              <TouchableOpacity
                key={item.nome}
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
                  style={{ marginLeft: 20 }}
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
          })}

          <Text style={styles.label}>Tag</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira o código da tag"
            placeholderTextColor="#888"
            value={tag}
            onChangeText={setTag}
            autoCapitalize="characters"
          />

          <Btn txt="Cadastrar" pressFunc={cadastrarMoto} />
        </ScrollView>
      </ContainerScreens>
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "#d1d9e6",
    fontSize: 16,
    marginBottom: 6,
    marginTop: 18,
    marginLeft: 8,
    fontWeight: "600",
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 8,
    marginLeft: 4,
  },
  checkboxBase: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: "#22c55e",
    backgroundColor: "#222b37",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkboxChecked: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#22c55e",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#19202C",
    color: "#fff",
    fontSize: 17,
    borderRadius: 16,
    paddingVertical: 13,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderWidth: 1.5,
    borderColor: "#222b37",
    fontWeight: "500",
  },
  modeloBtn: {
    backgroundColor: "#1a2639",
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: "#d1d9e6",
  },
  modeloBtnAtivo: {
    borderColor: "#22c55e",
  },
  modeloTexto: {
    color: "#d1d9e6",
    fontSize: 18,
    fontWeight: "600",
  },
  modeloTextoAtivo: {
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
