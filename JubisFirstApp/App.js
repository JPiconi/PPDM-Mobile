import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* {[GRUPO, {LINHA}]}*/}
      <Text style={styles.text}>WELCOME FELLOW PARTNER!!!!</Text>
      <Text style={{ color: "#c2b5a7", fontSize: 17 }}>
        MAKE YOURSELF AT HOME!!!
      </Text>
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
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
});
