import { useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { goBack } from "../../utils/navigation";
import Cabecalho from "../../_components/Cabecalho";
import ContainerScreens from "../../_components/ContainerScreens";
import { useTheme } from "../../context/ThemeContext";

export default function InfoMoto({ navigation }) {
  const { colors } = useTheme();
  const route = useRoute();
  const { moto } = route.params;

  return (
    <>
      <Cabecalho
        title="Informações da moto"
        iconName="arrow-back"
        onIconPress={() => goBack(navigation)}
      />
      <ContainerScreens>
        <View style={styles.content}>
          <View style={[styles.infoBox, { backgroundColor: colors.surface }]}>
            <Text style={[styles.infoText, { color: colors.text }]}>
              {moto.placa}
            </Text>
          </View>
          <View style={[styles.infoBox, { backgroundColor: colors.surface }]}>
            <Text style={[styles.infoText, { color: colors.text }]}>
              {moto.chassi}
            </Text>
          </View>
          <View style={[styles.infoBox, { backgroundColor: colors.surface }]}>
            <Text style={[styles.infoText, { color: colors.text }]}>
              {moto.modelo}
            </Text>
          </View>
          <View style={[styles.infoBox, { backgroundColor: colors.surface }]}>
            <Text style={[styles.infoText, { color: colors.text }]}>
              {moto.setor}
            </Text>
          </View>
        </View>
      </ContainerScreens>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: "5%",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: "5%",
    gap: "7%",
  },
  infoBox: {
    width: "88%",
    borderRadius: 16,
    paddingVertical: 13,
    alignItems: "center",
    marginBottom: 0,
  },
  infoText: {
    fontSize: 18,
    fontWeight: "400",
    letterSpacing: 0.2,
  },
});
