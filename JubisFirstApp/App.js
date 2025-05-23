import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <ImageBackground
      style={styles.container}
      source={require("./src/assets/images")}
      resizeMode="cover"
    >
      {/* <Button
        title="Click Me !"
        color="#4c563f"
        onPress={() => alert("Você apertou o botão!!")}
      /> */}
      <TouchableOpacity style={styles.btn} onPress={() => alert("Olá!!!")}>
        <Text style={styles.text}>Click Me !</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4c563f",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 40,
  },
  text: {
    color: "#fff",
  },
  btn: {
    width: 125,
    padding: 20,
    backgroundColor: "transparent",
    color: "#78898F",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#78898F",
  },
});

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>HELLO WORLD!</Text>

//       <Image
//         source={require("./src/assets/images/opa.jpg")}
//         style={styles.image}
//       />
//     </View>
//   );
// }
