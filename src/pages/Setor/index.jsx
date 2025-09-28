import React, { useEffect, useState } from "react";
import { Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { goBack } from "../../utils/navigation";
import Cabecalho from "../../_components/Cabecalho";
import ContainerScreens from "../../_components/ContainerScreens";
import { useTheme } from "../../context/ThemeContext";
import axios from "axios";

export default function Setor({ navigation }) {
  const { colors } = useTheme();
  const route = useRoute();
  const { setor } = route.params;
  const [motos, setMotos] = useState([]);

  const mapSetorParaId = (nomeSetor) => {
    switch (nomeSetor) {
      case "Pronta para aluguel":
        return 1;
      case "Minha Mottu":
        return 2;
      case "Pendente":
        return 3;
      case "Sem placa":
        return 4;
      case "Reparo simples":
        return 5;
      case "Danos estruturais graves":
        return 6;
      case "Motor defeituoso":
        return 7;
      case "Agendada para manutenção":
        return 8;
    }
  };

  useEffect(() => {
    const fetchMotosBySetor = async () => {
      console.log("Setor vindo da rota:", setor);
      const idSetor = mapSetorParaId(setor);
      console.log("idSetor resultante:", idSetor);

      if (!idSetor) {
        console.log("idSetor não encontrado!");
        return;
      }

      try {
        const response = await axios.get(
          "http://192.168.15.3:5117/api/v1/motos/setor/" + idSetor
        );

        if (response.data && Array.isArray(response.data.data)) {
          setMotos(response.data.data);
        } else {
          setMotos([]);
        }
      } catch (error) {
        setMotos([]);
        console.log("error: " + error.message || error);
      }
    };

    fetchMotosBySetor();
  }, []);

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
              onPress={() => navigation.push("InfoMoto", { moto: item })}
            >
              <Text style={[styles.texto, { color: colors.textSecondary }]}>
                <Text style={[styles.label, { color: colors.border }]}>
                  Placa:
                </Text>
                {item.placa ?? "  Não informada"}
              </Text>
              <Text style={[styles.texto, { color: colors.text }]}>
                <Text style={[styles.label, { color: colors.border }]}>
                  Chassi:
                </Text>
                {"  "}
                {item.chassi}
              </Text>
              <Text style={[styles.texto, { color: colors.text }]}>
                <Text style={[styles.label, { color: colors.border }]}>
                  Modelo:
                </Text>
                {"  "}
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
