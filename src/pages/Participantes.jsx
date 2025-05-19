import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import Integrantes from "../components/Integrantes";

export default function Participantes() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Participantes</Text>

      <Integrantes
        nome="Nathan Magno"
        rm="RM 558987"
        urlImage={require("../../assets/Nathan.jpg")}
        github="https://github.com/NathanMagno"
      />

      <Integrantes
        nome="Júlio Cesar"
        rm="RM 557774"
        urlImage={require("../../assets/Jubs.jpg")}
        github="https://github.com/JubsHereMan"
      />

      <Integrantes
        nome="Erick Paschoalatto"
        rm="RM 554854"
        urlImage={require("../../assets/Erick.jpg")}
        github="https://github.com/ozerikoz"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#1a2639",
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: "12%",
  },
  header: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  logohomepage: {
    width: 60,
    height: 60,
  },
  textHeader: {
    marginLeft: 10,
    fontSize: 22,
    color: "white",
  },
});
