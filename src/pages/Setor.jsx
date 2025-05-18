import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function Setor({ navigation }) {
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
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#F97316" />
        </TouchableOpacity>
        <Text style={styles.titulo}>Motos do setor: {setor}</Text>
      </View>

      <FlatList
        data={motos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("InfoMoto", { moto: item })}
          >
            <Text style={styles.texto}>
              <Text style={styles.label}>Placa:</Text> {item.placa}
            </Text>
            <Text style={styles.texto}>
              <Text style={styles.label}>Chassi:</Text> {item.chassi}
            </Text>
            <Text style={styles.texto}>
              <Text style={styles.label}>Modelo:</Text> {item.modelo}
            </Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.texto}>Nenhuma moto nesse setor.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a2639",
    padding: 20,
    paddingTop: "12%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 12,
    flexShrink: 1,
  },
  card: {
    backgroundColor: "#2a3550",
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
  },
  texto: {
    color: "#d1d9e6",
    fontSize: 16,
  },
  label: {
    color: "#F97316",
    fontWeight: "500",
  },
});
