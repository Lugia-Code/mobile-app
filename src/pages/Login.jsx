import { Image } from "expo-image";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Btn from "../components/Btn";

export default function Login({ navigation }) {
  const [hidePassword, setHidePassword] = useState(true);

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/lugiatrack.png")}
          style={styles.logo}
          height={100}
        />
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#666"
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <View style={styles.underline} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              secureTextEntry={hidePassword}
              textContentType="password"
              placeholderTextColor="#666"
            />
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={styles.eyeIcon}
            >
              <Icon
                name={hidePassword ? "eye-off" : "eye"}
                size={24}
                color="#F97316"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.underline} />
        </View>

        <Btn txt="Entrar" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F1C2D",
    padding: 20,
  },
  logoContainer: {
    width: "100%",
    height: 62,
    marginTop: 30,
    alignItems: "center",
  },
  logo: {
    width: 85,
    height: 63,
    paddingInline: 40,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 100,
  },
  inputContainer: {
    marginBottom: 30,
  },
  label: {
    color: "#F97316",
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    color: "white",
    fontSize: 16,
    paddingVertical: 8,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
    color: "white",
    fontSize: 16,
    paddingVertical: 8,
  },
  eyeIcon: {
    padding: 4,
  },
  underline: {
    height: 1,
    backgroundColor: "#F97316",
    marginTop: 5,
  },
});
