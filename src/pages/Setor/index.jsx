import React, { useEffect, useState } from "react";
import { Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/native";
import { goBack } from "../../utils/navigation";
import Cabecalho from "../../_components/Cabecalho";
import ContainerScreens from "../../_components/ContainerScreens";
import { useTheme } from "../../context/ThemeContext";

export default function Setor({ navigation }) {
  const { colors } = useTheme();
  const route = useRoute();
  const { setor } = route.params;

  const [motos, setMotos] = useState([]);

  useEffect(() => {
    const buscarMotos = async () => {
      try {
        const dados = await AsyncStorage.getItem("@motos");
        if (dados !== null) {
          const lista = JSON.parse(dados);
          const filtradas = lista.filter((moto) => moto.setor === setor);
          setMotos(filtradas);
        }
      } catch (error) {
        console.log("Erro ao buscar motos:", error);
      }
    };

    buscarMotos();
  }, [setor]);

  return (
    <>
      <Cabecalho
        title={setor}
        onIconPress={() => goBack(navigation)}
        iconName="arrow-back"
      />
      <ContainerScreens>
        <FlatList
          data={motos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.card, { backgroundColor: colors.secondary }]}
              onPress={() => navigation.navigate("InfoMoto", { moto: item })}
            >
              <Text style={[styles.texto, { color: colors.text }]}>
                <Text style={[styles.label, { color: colors.border }]}>
                  Placa:
                </Text>{" "}
                {item.placa}
              </Text>
              <Text style={[styles.texto, { color: colors.text }]}>
                <Text style={[styles.label, { color: colors.border }]}>
                  Chassi:
                </Text>{" "}
                {item.chassi}
              </Text>
              <Text style={[styles.texto, { color: colors.text }]}>
                <Text style={[styles.label, { color: colors.border }]}>
                  Modelo:
                </Text>{" "}
                {item.modelo}
              </Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <Text style={[styles.texto, { color: colors.text }]}>
              Nenhuma moto nesse setor.
            </Text>
          }
        />
      </ContainerScreens>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
  },
  texto: {
    fontSize: 16,
  },
  label: {
    fontWeight: "500",
  },
});
