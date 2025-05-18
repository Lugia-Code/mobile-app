import { ScrollView, StyleSheet, Text, View } from "react-native";
import Setores from "../components/Setores";

export default function Patio() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Patio</Text>
      <Text style={styles.info}>Selecione o setor que deseja verificar</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Setores
          nome="Pronta para aluguel"
          icone="checkmark-circle"
          cor="green"
        />
        <Setores nome="Pendente" icone="time-sharp" cor="yellow" />
        <Setores nome="Sem placa" icone="close-circle" cor="white" />
        <Setores nome="Danos estruturais graves" icone="warning" cor="red" />
        <Setores nome="Reparo simples" icone="construct" cor="blue" />
        <Setores nome="Agendada para manutenção" icone="calendar" cor="grey" />
        <Setores nome="Motor defeituoso" icone="cog" cor="orange" />
        <Setores nome="Minha Mottu" icone="person" cor="#00C853" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a2639",
    paddingTop: "12%",
    paddingBottom: "15%",
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    alignSelf: "center",
  },
  info: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 15,
    alignSelf: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: 20,
  },
});
