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
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Btn from "../../_components/Btn";
import Cabecalho from "../../_components/Cabecalho";
import { logOut } from "../../utils/navigation";
import ContainerScreens from "../../_components/ContainerScreens";
import { useTheme } from "../../context/ThemeContext";
import axios from "axios";

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
  const { colors } = useTheme();
  const [temPlaca, setTemPlaca] = useState(false);
  const [placa, setPlaca] = useState("");
  const [chassi, setChassi] = useState("");
  const [modeloSelecionado, setModeloSelecionado] = useState("");
  const [setorSelecionado, setSetorSelecionado] = useState("");
  const [tag, setTag] = useState("");
  const [loading, setLoading] = useState(false);

  const cadastrarMoto = async () => {
    await axios
      .post("http://192.168.15.3:5117/api/v1/motos", {
        placa: placa,
        chassi: chassi,
        modelo: modeloSelecionado,
        idSetor: 1,
        codigoTag: tag,
      })
      .then((response, a) => {
        console.log(response.data);
      })
      .catch((error) => console.log("erro:", error));
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
              style={[
                styles.checkboxBase,
                {
                  borderColor: colors.secondary,
                  backgroundColor: colors.surface,
                },
              ]}
            >
              {temPlaca && (
                <View
                  style={[
                    styles.checkboxChecked,
                    { backgroundColor: colors.secondary },
                  ]}
                >
                  <Ionicons name="checkmark" size={18} color="#fff" />
                </View>
              )}
            </Pressable>
            <Text style={[styles.checkboxLabel, { color: colors.text }]}>
              Tem placa?
            </Text>
          </View>

          {temPlaca && (
            <>
              <Text style={[styles.label, { color: colors.text }]}>Placa</Text>
              <TextInput
                style={[
                  styles.input,
                  { backgroundColor: colors.surface, color: colors.text },
                ]}
                placeholder="Informe a placa"
                placeholderTextColor={colors.textSecondary}
                value={placa}
                onChangeText={setPlaca}
                autoCapitalize="characters"
                maxLength={7}
              />
            </>
          )}

          <Text style={[styles.label, { color: colors.text }]}>Chassi</Text>
          <TextInput
            style={[
              styles.input,
              { backgroundColor: colors.surface, color: colors.text },
            ]}
            placeholder="Informe o chassi"
            placeholderTextColor={colors.textSecondary}
            value={chassi}
            onChangeText={setChassi}
          />

          <Text style={[styles.label, { color: colors.text }]}>
            Modelo da moto
          </Text>
          {modelosDisponiveis.map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.modeloBtn,
                {
                  backgroundColor: colors.border,
                  borderColor: colors.textSecondary,
                },
                modeloSelecionado === item && { borderColor: colors.primary },
              ]}
              onPress={() => setModeloSelecionado(item)}
            >
              <Text
                style={[
                  [styles.modeloTexto, { color: colors.text }],
                  modeloSelecionado === item && { color: colors.primary },
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}

          <Text
            style={[[styles.label, { color: colors.text }], { marginTop: 22 }]}
          >
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
                  { backgroundColor: colors.border },
                  selecionado && { borderColor: colors.primary },
                ]}
              >
                <Text
                  style={[
                    setorStyles.nome,
                    { color: colors.text },
                    selecionado && { color: colors.primary },
                  ]}
                >
                  {item.nome}
                </Text>
                <Ionicons
                  name={item.icone}
                  size={30}
                  color={selecionado ? colors.primary : colors.text}
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

          <Text style={[styles.label, { color: colors.text }]}>Tag</Text>
          <TextInput
            style={[
              styles.input,
              { backgroundColor: colors.surface, color: colors.text },
            ]}
            placeholder="Insira o código da tag"
            placeholderTextColor={colors.textSecondary}
            value={tag}
            onChangeText={setTag}
            autoCapitalize="characters"
          />

          <View
            style={{
              height: 56,
              justifyContent: "center",
              paddingHorizontal: 30,
              marginBottom: 24,
            }}
          >
            {loading ? (
              <ActivityIndicator
                style={loading}
                size="large"
                color={colors.secondary}
              />
            ) : (
              <Btn txt="Cadastrar" pressFunc={() => cadastrarMoto()} />
            )}
          </View>
        </ScrollView>
      </ContainerScreens>
    </>
  );
}

const styles = StyleSheet.create({
  label: {
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
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkboxChecked: {
    width: 22,
    height: 22,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxLabel: {
    fontSize: 16,
    fontWeight: "600",
  },
  input: {
    fontSize: 17,
    borderRadius: 16,
    paddingVertical: 13,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderWidth: 1.5,

    fontWeight: "500",
  },
  modeloBtn: {
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginVertical: 6,
    borderWidth: 1,
  },

  modeloTexto: {
    fontSize: 18,
    fontWeight: "600",
  },
});

const setorStyles = StyleSheet.create({
  container: {
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: "8%",
    marginVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    position: "relative",
  },

  nome: {
    fontSize: 18,
    fontWeight: "600",
    flex: 1,
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
