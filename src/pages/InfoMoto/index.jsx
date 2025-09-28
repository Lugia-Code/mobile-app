import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
  Alert,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { goBack } from "../../utils/navigation";
import Cabecalho from "../../_components/Cabecalho";
import ContainerScreens from "../../_components/ContainerScreens";
import { useTheme } from "../../context/ThemeContext";
import { SimpleLineIcons } from "@expo/vector-icons";
import axios from "axios";

const SETORES = [
  { idSetor: 1, nome: "Pronta para aluguel" },
  { idSetor: 2, nome: "Minha Mottu" },
  { idSetor: 3, nome: "Pendente" },
  { idSetor: 4, nome: "Sem placa" },
  { idSetor: 5, nome: "Reparo simples" },
  { idSetor: 6, nome: "Danos estruturais graves" },
  { idSetor: 7, nome: "Motor defeituoso" },
  { idSetor: 8, nome: "Agendada para manutenção" },
];

export default function InfoMoto({ navigation }) {
  const { colors } = useTheme();
  const route = useRoute();
  const { moto } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSetor, setSelectedSetor] = useState(null);

  const setoresDisponiveis = SETORES.filter(
    (s) => s.idSetor !== (moto.setor?.idSetor ?? moto.setor)
  );

  function handleSelectSetor(nome) {
    setSelectedSetor(nome);
    setModalVisible(false);
  }

  const changeSetor = async () => {
    const setorObj = SETORES.find((s) => s.nome === selectedSetor);
    let response = null;

    await axios
      .put("http://192.168.15.3:5117/api/v1/motos/" + moto.chassi, {
        idSetor: setorObj.idSetor,
      })
      .then((resp) => {
        console.log(resp.status);
        console.log(resp.data);
        response = resp.status;
      })
      .catch((error) => console.log("error: " + error))
      .finally(() => {
        if (response === 200 || response == 201) {
          Alert.alert("Setor alterado com sucesso!");
        }
      });
  };

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
              Placa: {moto.placa ?? "Não informada"}
            </Text>
          </View>
          <View style={[styles.infoBox, { backgroundColor: colors.surface }]}>
            <Text style={[styles.infoText, { color: colors.text }]}>
              Chassi: {moto.chassi}
            </Text>
          </View>
          <View style={[styles.infoBox, { backgroundColor: colors.surface }]}>
            <Text style={[styles.infoText, { color: colors.text }]}>
              Modelo: {moto.modelo}
            </Text>
          </View>
          <View style={[styles.infoBox, { backgroundColor: colors.surface }]}>
            <Text style={[styles.infoText, { color: colors.text }]}>
              Setor: {moto.setor?.nome}
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
              onPress={changeSetor}
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
