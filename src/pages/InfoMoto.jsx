import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6, FontAwesome5 } from "@expo/vector-icons";

export default function InfoMoto({ navigation }) {
  const route = useRoute();
  const { moto } = route.params;

  const [motoPosition, setMotoPosition] = useState({ left: 0, top: 0 });
  const [userPosition, setUserPosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const maxLeft = 300;
    const maxTop = 400;

    const getRandom = (max) => Math.floor(Math.random() * max);

    setMotoPosition({
      left: getRandom(maxLeft),
      top: getRandom(maxTop),
    });

    setUserPosition({
      left: getRandom(maxLeft),
      top: getRandom(maxTop),
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#F97316" />
        </TouchableOpacity>
        <Text style={styles.titulo}>Informações da Moto</Text>
      </View>

      <View style={styles.infoBox}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Placa:</Text>
          <Text style={styles.valor}>{moto.placa}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Modelo:</Text>
          <Text style={styles.valor}>{moto.modelo}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Chassi:</Text>
          <Text style={styles.valor}>{moto.chassi}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Setor:</Text>
          <Text style={styles.valor}>{moto.setor}</Text>
        </View>
      </View>

      <View style={styles.containerLocation}>
        <FontAwesome6
          name="motorcycle"
          color="#F97316"
          size={50}
          style={{ position: "absolute", ...motoPosition }}
        />
        <FontAwesome5
          name="sort-up"
          color="#F97316"
          size={60}
          style={{ position: "absolute", ...userPosition }}
        />
      </View>
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
    flex: 1,
    textAlign: "center",
  },
  infoBox: {
    backgroundColor: "#2a3550",
    padding: 20,
    borderRadius: 12,
  },
  containerLocation: {
    backgroundColor: "#2a3550",
    height: 500,
    width: 360,
    alignSelf: "center",
    marginTop: 50,
    position: "relative",
    borderRadius: 12,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  label: {
    color: "#F97316",
    fontWeight: "bold",
    fontSize: 16,
  },
  valor: {
    color: "#fff",
    fontSize: 16,
  },
});
