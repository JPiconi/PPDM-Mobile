import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const changeText = () => {
    console.log("Algo foi digitado no TEXT INPUT");
  };

  // maskCpf = () => {
  //   let cpf = "xxx";
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>HELLO WORLD!</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        secureTextEntry={true}
        placeholderTextColor="black"
        inputMode={"numeric"}
        autoCapitalize="characters"
        multiline={true}
        onChangeText={changeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4c563f",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: "#fff",
  },
  input: {
    color: "#ff0000",
    width: 250,
    padding: 10,
    borderBottomWidth: 1,
    borderBlockColor: "blue",
  },
});
