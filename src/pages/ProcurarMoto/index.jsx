import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Btn from "../../_components/Btn";
import Cabecalho from "../../_components/Cabecalho";
import { logOut } from "../../utils/navigation";
import ContainerScreens from "../../_components/ContainerScreens";
import { useTheme } from "../../context/ThemeContext";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function ProcurarMoto({ navigation }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const [chassi, setChassi] = useState("");
  const [placa, setPlaca] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBuscar = async () => {
    if (!chassi.trim() && !placa.trim()) {
      Alert.alert(
        "Atenção",
        "Por favor, preencha o campo de chassi ou o campo de placa para buscar."
      );
      return;
    }

    setLoading(true);

    try {
      let response = null;
      if (placa.trim()) {
        response = await axios.get(
          `http://192.168.15.3:5117/api/v1/motos/buscar/placa/${placa
            .trim()
            .toUpperCase()}`
        );
      } else if (chassi.trim()) {
        response = await axios.get(
          `http://192.168.15.3:5117/api/v1/motos/buscar/chassi/${chassi
            .trim()
            .toUpperCase()}`
        );
      }

      if (response.status === 200 && response.data) {
        navigation.push("InfoMoto", { moto: response.data });
      } else {
        Alert.alert(
          "Moto não encontrada",
          "Não foi possível localizar uma moto com os dados informados."
        );
      }
    } catch (error) {
      Alert.alert(
        "Erro na busca",
        "Ocorreu um erro ao buscar a moto. Verifique os dados e tente novamente."
      );
      console.log("Erro na busca:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Cabecalho
        title="Buscar Moto"
        iconName="logout"
        onIconPress={() => logOut(navigation)}
      />
      <ContainerScreens>
        <View style={styles.searchContainer}>
          <View
            style={[styles.inputContainer, { backgroundColor: colors.surface }]}
          >
            <Ionicons
              name="search"
              size={20}
              color={colors.text}
              style={styles.searchIcon}
            />
            <TextInput
              style={{ color: colors.textSecondary }}
              placeholder={t("Informe o chassi da moto")}
              placeholderTextColor={colors.textSecondary}
              value={chassi}
              onChangeText={setChassi}
              autoCapitalize="characters"
            />
          </View>
          <Text style={[styles.ouText, { color: colors.text }]}>ou</Text>
          <View
            style={[styles.inputContainer, { backgroundColor: colors.surface }]}
          >
            <Ionicons
              name="search"
              size={20}
              color={colors.text}
              style={styles.searchIcon}
            />
            <TextInput
              style={{ color: colors.textSecondary }}
              placeholder={t("Informe a placa da moto")}
              placeholderTextColor={colors.textSecondary}
              value={placa}
              onChangeText={setPlaca}
              autoCapitalize="characters"
            />
          </View>

          <View
            style={{
              height: 56,
              justifyContent: "center",
              paddingHorizontal: 30,
              marginBottom: 24,
            }}
          >
            {loading ? (
              <ActivityIndicator size="large" color={colors.secondary} />
            ) : (
              <Btn txt={t("Procurar")} pressFunc={handleBuscar} />
            )}
          </View>
        </View>
      </ContainerScreens>
    </>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    padding: 22,
    alignItems: "center",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    paddingVertical: 13,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderWidth: 1.5,
    width: "100%",
  },
  searchIcon: {
    marginHorizontal: 10,
  },
  input: {
    fontSize: 22,
    fontWeight: "500",
  },
  ouText: {
    fontSize: 18,
    fontWeight: "700",
  },
});
