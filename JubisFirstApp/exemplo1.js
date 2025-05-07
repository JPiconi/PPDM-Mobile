import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
      <TextInput style={styles.input2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#454545",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: "#fff",
    padding: 5,
    width: 70,
  },
  input2: {
    borderWidth: 0,
    borderColor: "#fff",
    textAlign: "center",
    marginTop: 20,
    width: 70,
    padding: 5,
    borderRadius: 15,
    shadowColor: "blue",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
