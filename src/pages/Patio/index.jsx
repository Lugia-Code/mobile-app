import { ScrollView, StyleSheet, Text } from "react-native";
import Setores from "../../_components/Setores";
import { logOut } from "../../utils/navigation";
import { useTheme } from "../../context/ThemeContext";
import Cabecalho from "../../_components/Cabecalho";
import ContainerScreens from "../../_components/ContainerScreens";
import { useTranslation } from "react-i18next";

export default function Patio({ navigation }) {
  const { colors } = useTheme();
  const { t } = useTranslation();
  return (
    <>
      <Cabecalho
        title={t("Pátio")}
        iconName="logout"
        onIconPress={() => logOut(navigation)}
      />
      <ContainerScreens>
        <Text style={[styles.info, { color: colors.text }]}>
          {t("Selecione o setor que deseja verificar")}
        </Text>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Setores
            nome={t("Pronta para aluguel")}
            icone="checkmark-circle"
            onPressFunc={() =>
              navigation.navigate("Setor", { setor: "Pronta para aluguel" })
            }
          />
          <Setores
            nome={t("Pendente")}
            icone="time-sharp"
            onPressFunc={() =>
              navigation.navigate("Setor", { setor: "Pendente" })
            }
          />
          <Setores
            nome={t("Sem placa")}
            icone="close-circle"
            onPressFunc={() =>
              navigation.navigate("Setor", { setor: "Sem placa" })
            }
          />
          <Setores
            nome={t("Danos estruturais graves")}
            icone="warning"
            onPressFunc={() =>
              navigation.navigate("Setor", {
                setor: "Danos estruturais graves",
              })
            }
          />
          <Setores
            nome={t("Reparo simples")}
            icone="construct"
            onPressFunc={() =>
              navigation.navigate("Setor", { setor: "Reparo simples" })
            }
          />
          <Setores
            nome={t("Agendada para manutenção")}
            icone="calendar"
            onPressFunc={() =>
              navigation.navigate("Setor", {
                setor: "Agendada para manutenção",
              })
            }
          />
          <Setores
            nome={t("Motor defeituoso")}
            icone="cog"
            onPressFunc={() =>
              navigation.navigate("Setor", { setor: "Motor defeituoso" })
            }
          />
          <Setores
            nome={t("Minha Mottu")}
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
