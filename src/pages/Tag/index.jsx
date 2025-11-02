import { StyleSheet } from "react-native";

import Cabecalho from "../../_components/Cabecalho";
import { logOut } from "../../utils/navigation";
import ContainerScreens from "../../_components/ContainerScreens";
import { useTranslation } from "react-i18next";

export default function Tag({ navigation }) {
  const { t } = useTranslation();
  return (
    <>
      <Cabecalho
        iconName="logout"
        onIconPress={() => logOut(navigation)}
        title={t("Informações das Tags")}
      />
      <ContainerScreens></ContainerScreens>
    </>
  );
}

const styles = StyleSheet.create({});
