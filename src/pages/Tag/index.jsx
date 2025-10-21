import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Cabecalho from "../../_components/Cabecalho";
import { logOut } from "../../utils/navigation";
import ContainerScreens from "../../_components/ContainerScreens";

export default function Tag({ navigation }) {
  return (
    <>
      <Cabecalho
        iconName="logout"
        onIconPress={() => logOut(navigation)}
        title="Informações das Tags"
      />
      <ContainerScreens></ContainerScreens>
    </>
  );
}

const styles = StyleSheet.create({});
