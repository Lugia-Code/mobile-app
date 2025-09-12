import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { goBack } from "../../utils/navigation";
import Cabecalho from "../../_components/Cabecalho";
import ContainerScreens from "../../_components/ContainerScreens";
import { useTheme } from "../../context/ThemeContext";
import { SimpleLineIcons } from "@expo/vector-icons";

const SETORES = [
  { nome: "Pronta para aluguel" },
  { nome: "Pendente" },
  { nome: "Sem placa" },
  { nome: "Danos estruturais graves" },
  { nome: "Reparo simples" },
  { nome: "Agendada para manutenção" },
  { nome: "Motor defeituoso" },
  { nome: "Minha Mottu" },
];

export default function InfoMoto({ navigation }) {
  const { colors } = useTheme();
  const route = useRoute();
  const { moto } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSetor, setSelectedSetor] = useState(null);

  const setoresDisponiveis = SETORES.filter((s) => s.nome !== moto.setor);

  function handleSelectSetor(nome) {
    setSelectedSetor(nome);
    setModalVisible(false);
  }

  function handleSave() {
    console.log("Setor salvo: ", selectedSetor);
  }

  return (
    <>
      <Cabecalho
        title="Informações da moto"
        iconName="arrow-back"
        onIconPress={() => goBack(navigation)}
      />
      <ContainerScreens>
        <View style={styles.content}>
          <View style={[styles.infoBox, { backgroundColor: colors.surface }]}>
            <Text style={[styles.infoText, { color: colors.text }]}>
              {moto.placa}
            </Text>
          </View>
          <View style={[styles.infoBox, { backgroundColor: colors.surface }]}>
            <Text style={[styles.infoText, { color: colors.text }]}>
              {moto.chassi}
            </Text>
          </View>
          <View style={[styles.infoBox, { backgroundColor: colors.surface }]}>
            <Text style={[styles.infoText, { color: colors.text }]}>
              {moto.modelo}
            </Text>
          </View>
          <View style={[styles.infoBox, { backgroundColor: colors.surface }]}>
            <Text style={[styles.infoText, { color: colors.text }]}>
              {moto.setor}
            </Text>
          </View>

          <TouchableOpacity
            style={[
              styles.desvincularButton,
              { backgroundColor: colors.danger },
            ]}
            onPress={() => {}}
            activeOpacity={0.82}
          >
            <Text style={[styles.desvincularText, { color: colors.text }]}>
              Desvincular
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={[styles.selectBox, { backgroundColor: colors.text }]}
          >
            <Text style={[styles.selectText, { color: colors.primary }]}>
              {selectedSetor ? selectedSetor : "Trocar setor"}
            </Text>
            <SimpleLineIcons
              name="arrow-down"
              size={20}
              color={colors.primary}
              style={styles.iconRight}
            />
          </TouchableOpacity>

          {selectedSetor && (
            <TouchableOpacity
              style={[styles.saveButton, { backgroundColor: colors.primary }]}
              onPress={handleSave}
              activeOpacity={0.82}
            >
              <Text style={[styles.saveText, { color: colors.surface }]}>
                Salvar
              </Text>
            </TouchableOpacity>
          )}

          <Modal
            visible={modalVisible}
            animationType="fade"
            transparent
            onRequestClose={() => setModalVisible(false)}
          >
            <TouchableOpacity
              style={styles.modalOverlay}
              onPress={() => setModalVisible(false)}
              activeOpacity={1}
            >
              <View style={styles.modalContent}>
                <FlatList
                  data={setoresDisponiveis}
                  keyExtractor={(item) => item.nome}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.option}
                      onPress={() => handleSelectSetor(item.nome)}
                    >
                      <Text style={styles.optionText}>{item.nome}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </TouchableOpacity>
          </Modal>
        </View>
      </ContainerScreens>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    width: "100%",
    alignItems: "center",
    gap: 16,
  },
  infoBox: {
    width: "88%",
    borderRadius: 8,
    paddingVertical: 13,
    alignItems: "center",
  },
  infoText: {
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0.2,
  },
  desvincularButton: {
    width: "80%",
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 18,
  },
  desvincularText: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.6,
  },
  selectBox: {
    width: "80%",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 18,
    position: "relative",
    justifyContent: "center",
  },
  selectText: {
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 0.2,
    textAlign: "center",
    width: "100%",
  },
  iconRight: {
    position: "absolute",
    right: "7%",
    marginTop: "1.2%",
  },
  saveButton: {
    width: "80%",
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 16,
  },
  saveText: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.6,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.38)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#222936",
    borderRadius: 13,
    width: "80%",
    paddingVertical: 12,
  },
  option: {
    paddingVertical: 13,
    alignItems: "center",
  },
  optionText: {
    color: "#E5E7EB",
    fontSize: 15,
  },
});
