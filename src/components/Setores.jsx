import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Setores({ nome, icone, cor }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.nome}>{nome}</Text>
      <Ionicons name={icone} size={30} color="#d1d9e6" marginHorizontal={30} />
      <View style={[styles.barraCor, { backgroundColor: cor }]} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1a2639",
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginVertical: 12,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#ffffff",
    shadowOffset: { width: 10, height: 40 },
    shadowOpacity: 1,
    shadowRadius: 80,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#d1d9e6",
    position: "relative",
    marginVertical: "4%",
  },
  nome: {
    fontSize: 18,
    fontWeight: "600",
    color: "#d1d9e6",
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
