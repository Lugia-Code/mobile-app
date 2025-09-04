import { ScrollView, StyleSheet, Text, View } from "react-native";
import Setores from "../../_components/Setores";

export default function Patio({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Patio</Text>
      <Text style={styles.info}>Selecione o setor que deseja verificar</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Setores
          nome="Pronta para aluguel"
          icone="checkmark-circle"
          cor="green"
          onPressFunc={() =>
            navigation.navigate("Setor", { setor: "Pronta para aluguel" })
          }
        />
        <Setores
          nome="Pendente"
          icone="time-sharp"
          cor="yellow"
          onPressFunc={() =>
            navigation.navigate("Setor", { setor: "Pendente" })
          }
        />
        <Setores
          nome="Sem placa"
          icone="close-circle"
          cor="white"
          onPressFunc={() =>
            navigation.navigate("Setor", { setor: "Sem placa" })
          }
        />
        <Setores
          nome="Danos estruturais graves"
          icone="warning"
          cor="red"
          onPressFunc={() =>
            navigation.navigate("Setor", { setor: "Danos estruturais graves" })
          }
        />
        <Setores
          nome="Reparo simples"
          icone="construct"
          cor="blue"
          onPressFunc={() =>
            navigation.navigate("Setor", { setor: "Reparo simples" })
          }
        />
        <Setores
          nome="Agendada para manutenção"
          icone="calendar"
          cor="grey"
          onPressFunc={() =>
            navigation.navigate("Setor", { setor: "Agendada para manutenção" })
          }
        />
        <Setores
          nome="Motor defeituoso"
          icone="cog"
          cor="orange"
          onPressFunc={() =>
            navigation.navigate("Setor", { setor: "Motor defeituoso" })
          }
        />
        <Setores
          nome="Minha Mottu"
          icone="person"
          cor="#00C853"
          onPressFunc={() =>
            navigation.navigate("Setor", { setor: "Minha Mottu" })
          }
        />
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
