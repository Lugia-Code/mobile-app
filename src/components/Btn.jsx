import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Btn({ txt, pressFunc }) {
  return (
    <TouchableOpacity onPress={pressFunc} style={styles.button}>
      <Text style={styles.buttonText}>{txt}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F97316",
    height: 54,
    marginHorizontal: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});
