import { Image } from "expo-image";
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.bg}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/lugiatrack.png")}
          style={styles.logo}
          height={100}
        />
      </View>

      <View style={styles.formulario}>
        <TextInput placeholder="Digite seu email" style={styles.txtInp} textContentType="emailAddress" />
        <TextInput placeholder="Digite sua senha" style={styles.txtInp} textContentType="password" />

        <TouchableOpacity style={styles.btn}>
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#0F1C2D",
    flex: 1,
    alignItems: "center",
  },
  logoContainer: {
    height: 100,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  logo: {
    height: 60,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  txtInp: {
    color: '#F97316'
  },
  btn: {
    color: '#F97316',
    padding: '10%',
    width: '100px'
  }
});
