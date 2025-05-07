import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* {[GRUPO, {LINHA}]}*/}
      <View style={[styles.card, { backgroundColor: "#5d4037" }]}>
        <Text>CARD 1</Text>
      </View>
      <View style={[styles.card, { backgroundColor: "#795548" }]}>
        <Text>CARD 2</Text>
      </View>
      <View style={[styles.card, { backgroundColor: "#8d6e63" }]}>
        <Text>CARD 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a98062",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  card: {
    width: 60,
    height: 60,
  },
});
