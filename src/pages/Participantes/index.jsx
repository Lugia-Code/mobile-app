import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import Integrantes from "../../_components/Integrantes";
import { useTheme } from "../../context/ThemeContext";
import Header from "../../_components/Cabecalho";
import ContainerScreens from "../../_components/ContainerScreens";

export default function Participantes() {
  return (
    <>
      <Header
        title="Integrantes"
        iconName="logout"
        onIconPress={() => logOut(navigation)}
      />
      <ContainerScreens>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Integrantes
            nome="Nathan Magno"
            rm="RM 558987"
            urlImage={require("../../../assets/Nathan.jpg")}
            github="https://github.com/NathanMagno"
          />

          <Integrantes
            nome="Júlio Cesar"
            rm="RM 557774"
            urlImage={require("../../../assets/Jubs.jpg")}
            github="https://github.com/JubsHereMan"
          />

          <Integrantes
            nome="Nathália Gomes"
            rm="RM 554945"
            urlImage={require("../../../assets/Nathalia.jpg")}
            github="https://github.com/nathaliagmsss"
          />
        </ScrollView>
      </ContainerScreens>
    </>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",

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
