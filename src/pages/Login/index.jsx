import { Image } from "expo-image";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Btn from "../../_components/Btn";
import { useTheme } from "../../context/ThemeContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";

export default function Login({ navigation }) {
  const { colors } = useTheme();

  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Atenção", "Preencha todos os campos!");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(async () => {
        Alert.alert("Sucesso ao logar", `Usuário logado com sucesso!`);
        navigation.replace("Tabs");
      })
      .catch((error) => {
        const errorCode = error.code;
        let message = "";
        if (errorCode === "auth/invalid-credential") {
          message = "E-mail ou senha incorretos! Tente novamente";
        } else {
          message = "Erro ao fazer login. Tente novamente mais tarde.";
        }
        setError(message);
      });
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/lugiatrack.png")}
          style={styles.logo}
          height={100}
        />
        <Text style={[styles.trackingCode, { color: colors.secondary }]}>
          Tracking Code
        </Text>
      </View>

      <View style={styles.formContainer}>
        <View style={[styles.inputBox, { backgroundColor: colors.surface }]}>
          <TextInput
            style={[styles.input, { color: colors.text }]}
            placeholder="Insira seu e-mail"
            placeholderTextColor={colors.textSecondary}
            keyboardType="email-address"
            textContentType="emailAddress"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
        </View>

        <View style={[styles.inputBox, { backgroundColor: colors.surface }]}>
          <View style={styles.passwordRow}>
            <TextInput
              style={[styles.input, { flex: 1, color: colors.text }]}
              placeholder="Insira sua senha"
              placeholderTextColor={colors.textSecondary}
              secureTextEntry={hidePassword}
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={styles.eyeBtn}
            >
              <View style={styles.eyeCircle}>
                <Icon
                  name={hidePassword ? "eye-off" : "eye"}
                  size={22}
                  color={colors.secondary}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ minHeight: 22, justifyContent: "center" }}>
          <Text style={[styles.errorText, { color: colors.danger }]}>
            {error !== "" ? error : " "}
          </Text>
        </View>

        <Btn txt="Entrar" pressFunc={() => handleLogin()} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  trackingCode: {
    fontSize: 40,
    fontWeight: 600,
  },
  logoContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    height: "25%",
    gap: "30%",
    paddingTop: "22%",
    alignItems: "center",
  },
  logo: {
    width: 85,
    height: 63,
  },
  formContainer: {
    flex: 0.75,
    gap: "5%",
    justifyContent: "center",
  },
  inputBox: {
    borderRadius: 24,
    paddingHorizontal: 18,
    height: 56,
    justifyContent: "center",
    marginBottom: 24,
  },
  input: {
    fontSize: 20,
    textAlign: "center",
    letterSpacing: 1,
  },
  passwordRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  eyeBtn: {
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  eyeCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,

    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 14,
  },
});
