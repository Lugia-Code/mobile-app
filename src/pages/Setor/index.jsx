import React, { useEffect, useState } from "react";
import { Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { goBack } from "../../utils/navigation";
import Cabecalho from "../../_components/Cabecalho";
import ContainerScreens from "../../_components/ContainerScreens";
import { useTheme } from "../../context/ThemeContext";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function Setor({ navigation }) {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const route = useRoute();
  const { setor } = route.params;
  const [motos, setMotos] = useState([]);

  const mapSetorParaId = (nomeSetor) => {
    switch (nomeSetor) {
      case t("Pronta para aluguel"):
        return 1;
      case t("Minha Mottu"):
        return 2;
      case t("Pendente"):
        return 3;
      case t("Sem placa"):
        return 4;
      case t("Reparo simples"):
        return 5;
      case t("Danos estruturais graves"):
        return 6;
      case t("Motor defeituoso"):
        return 7;
      case t("Agendada para manutenção"):
        return 8;
    }
  };

  useEffect(() => {
    const fetchMotosBySetor = async () => {
      console.log(t("Setor vindo da rota:"), setor);
      const idSetor = mapSetorParaId(setor);
      console.log(t("idSetor resultante:"), idSetor);

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
        title={t(setor)}
        onIconPress={() => goBack(navigation)}
        iconName="arrow-back"
      />
      <ContainerScreens>
        <FlatList
          data={motos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.card, { backgroundColor: colors.primary }]}
              onPress={() => navigation.push("InfoMoto", { moto: item })}
            >
              <Text style={[styles.texto, { color: colors.text }]}>
                <Text style={[styles.label, { color: colors.border }]}>
                  {t("Placa")}:
                </Text>
                {item.placa ?? t("  Não informada")}
              </Text>
              <Text style={[styles.texto, { color: colors.text }]}>
                <Text style={[styles.label, { color: colors.border }]}>
                  {t("Chassi")}:
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
              {t("Nenhuma moto nesse setor.")}
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
