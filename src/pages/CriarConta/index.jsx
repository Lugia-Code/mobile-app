import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Btn from "../../_components/Btn";
import { auth } from "../../services/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { logIn } from "../../utils/navigation";

export default function CriarConta({ navigation }) {
  const { colors } = useTheme();
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "O e-mail é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Digite um e-mail válido.";
    }
    if (!password) {
      newErrors.password = "A senha é obrigatória.";
    } else if (password.length < 6) {
      newErrors.password = "A senha deve ter pelo menos 6 caracteres.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const createAccount = () => {
    validateForm();

    createUserWithEmailAndPassword(auth, email, password)
      .then(async () => {
        logIn(navigation);
        Alert.alert("Contra criada com Sucesso!");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log12("Error:", errorMessage);
      });
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
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
          {!!errors.email && (
            <Text style={styles.errorMsg}>{errors.email}</Text>
          )}
        </View>

        <View style={[styles.inputBox, { backgroundColor: colors.surface }]}>
          <View style={styles.passwordRow}>
            <TextInput
              style={[styles.input, { flex: 1, color: colors.text }]}
              placeholder="Crie uma senha"
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
          {!!errors.password && (
            <Text style={styles.errorMsg}>{errors.password}</Text>
          )}
        </View>

        <Btn txt="Criar Conta" pressFunc={createAccount} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  formContainer: {
    flex: 0.75,
    gap: "5%",
    justifyContent: "center",
  },
  inputBox: {
    borderRadius: 24,
    paddingHorizontal: 18,
    height: 50,
    justifyContent: "center",
    marginBottom: 12,
  },
  errorMsg: {
    color: "red",
    marginTop: 8,
    marginBottom: 4,
    fontSize: 15,
    textAlign: "center",
    position: "absolute",
    alignSelf: "center",
    marginTop: 90,
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
});
