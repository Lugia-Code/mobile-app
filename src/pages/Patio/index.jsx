import { ScrollView, StyleSheet, Text, View } from "react-native";
import Setores from "../../_components/Setores";
import Header from "../../_components/Cabecalho";
import { logOut } from "../../utils/navigation";
import { useTheme } from "../../context/ThemeContext";
import Cabecalho from "../../_components/Cabecalho";
import ContainerScreens from "../../_components/ContainerScreens";

export default function Patio({ navigation }) {
  const { colors } = useTheme();

  return (
    <>
      <Cabecalho
        title="Pátio"
        iconName="logout"
        onIconPress={() => logOut(navigation)}
      />
      <ContainerScreens>
        <Text style={[styles.info, { color: colors.text }]}>
          Selecione o setor que deseja verificar
        </Text>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Setores
            nome="Pronta para aluguel"
            icone="checkmark-circle"
            onPressFunc={() =>
              navigation.navigate("Setor", { setor: "Pronta para aluguel" })
            }
          />
          <Setores
            nome="Pendente"
            icone="time-sharp"
            onPressFunc={() =>
              navigation.navigate("Setor", { setor: "Pendente" })
            }
          />
          <Setores
            nome="Sem placa"
            icone="close-circle"
            onPressFunc={() =>
              navigation.navigate("Setor", { setor: "Sem placa" })
            }
          />
          <Setores
            nome="Danos estruturais graves"
            icone="warning"
            onPressFunc={() =>
              navigation.navigate("Setor", {
                setor: "Danos estruturais graves",
              })
            }
          />
          <Setores
            nome="Reparo simples"
            icone="construct"
            onPressFunc={() =>
              navigation.navigate("Setor", { setor: "Reparo simples" })
            }
          />
          <Setores
            nome="Agendada para manutenção"
            icone="calendar"
            onPressFunc={() =>
              navigation.navigate("Setor", {
                setor: "Agendada para manutenção",
              })
            }
          />
          <Setores
            nome="Motor defeituoso"
            icone="cog"
            onPressFunc={() =>
              navigation.navigate("Setor", { setor: "Motor defeituoso" })
            }
          />
          <Setores
            nome="Minha Mottu"
            icone="person"
            onPressFunc={() =>
              navigation.navigate("Setor", { setor: "Minha Mottu" })
            }
          />
        </ScrollView>
      </ContainerScreens>
    </>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    alignSelf: "center",
  },
  info: {
    fontSize: 18,
    fontWeight: "400",
    marginVertical: 28,
    alignSelf: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: 20,
  },
});
