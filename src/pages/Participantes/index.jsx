import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Cabecalho from "../../_components/Cabecalho";
import { logOut } from "../../utils/navigation";
import ContainerScreens from "../../_components/ContainerScreens";
import { useTheme } from "../../context/ThemeContext";

const members = [
  {
    nome: "Nathan Magno",
    rm: "RM 558987",
    urlImage: require("../../../assets/Nathan.jpg"),
    github: "https://github.com/NathanMagno",
    linkedin: "https://www.linkedin.com/in/nathan-magno/",
  },
  {
    nome: "Júlio César Nunes Oliveria",
    rm: "RM 557774",
    urlImage: require("../../../assets/Jubs.jpg"),
    github: "https://github.com/JubsHereMan",
    linkedin: "https://www.linkedin.com/in/jubshere/",
  },
  {
    nome: "Nathália Gomes",
    rm: "RM 554945",
    urlImage: require("../../../assets/Nathalia.jpg"),
    github: "https://github.com/nathaliagmsss",
    linkedin: "https://www.linkedin.com/in/nathaliagmsss/",
  },
];

export default function Participantes() {
  const { colors } = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const member = members[selectedIndex];

  function openUrl(url) {
    Linking.openURL(url);
  }

  return (
    <>
      <Cabecalho
        title="Integrantes"
        iconName="logout"
        onIconPress={() => logOut()}
      />
      <ContainerScreens>
        <View style={styles.buttonGroup}>
          {members.map((m, idx) => (
            <TouchableOpacity
              key={m.nome}
              style={[
                styles.toggleButton,
                { backgroundColor: colors.text },
                selectedIndex === idx && { backgroundColor: colors.primary },
              ]}
              onPress={() => setSelectedIndex(idx)}
            >
              <Text
                style={[styles.toggleButtonText, { color: colors.background }]}
              >
                {m.nome.split(" ")[0]}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={[styles.card, { backgroundColor: colors.surface }]}>
          <View style={[styles.row, { color: colors.text }]}>
            <Image style={styles.avatar} source={member.urlImage} />
            <View style={styles.infoBox}>
              <Text style={[styles.role, { color: colors.text }]}>
                Integrante
              </Text>
              <Text style={[styles.name, { color: colors.text }]}>
                {member.nome}
              </Text>
              <Text style={[styles.rm, { color: colors.text }]}>
                {member.rm}
              </Text>
            </View>
          </View>
          <Text style={[styles.connections, { color: colors.text }]}>
            Conexões
          </Text>
          <View style={styles.iconRow}>
            <TouchableOpacity onPress={() => openUrl(member.github)}>
              <FontAwesome name="github" size={32} color={colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openUrl(member.linkedin)}>
              <FontAwesome
                name="linkedin-square"
                size={32}
                color={colors.primary}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ContainerScreens>
    </>
  );
}

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "center",
  },
  toggleButton: {
    paddingHorizontal: 20,
    paddingVertical: 7,

    borderRadius: 18,
    marginHorizontal: 3,
  },

  toggleButtonText: {
    fontWeight: "bold",
  },
  card: {
    width: 340,
    borderRadius: 24,
    alignItems: "center",
    paddingVertical: 24,
    paddingHorizontal: 12,
    marginTop: 10,
    alignSelf: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 12,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 16,
    marginLeft: 8,
  },
  infoBox: {
    flex: 1,
    justifyContent: "center",

    alignItems: "center",
  },
  role: {
    fontSize: 17,
    fontWeight: "bold",

    marginBottom: 2,
  },
  name: {
    fontSize: 16,

    marginBottom: 3,
  },
  rm: {
    fontSize: 14,
  },
  connections: {
    fontWeight: "bold",
    fontSize: 16,

    textAlign: "center",
    marginTop: "10%",
    marginBottom: 10,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 0,
    gap: "20%",
  },
  iconButton: {
    marginHorizontal: 20,
  },
});
