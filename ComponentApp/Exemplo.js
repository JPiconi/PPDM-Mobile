// //APPJS
// import { Text, View } from "react-native";

// import { First, ComponentTesting } from "./src/components/SecondComponent";
// import ComponentsExportados from "./src/components/SecondComponent";

// // IMPORT STYLES
// import { styles } from "./src/styles/styles";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <First />
//       <ComponentsExportados.Second />
//       <ComponentsExportados.Third />
//       <ComponentsExportados.Fourth />
//       <ComponentTesting />
//     </View>
//   );
// }

// //SECONDCOMPONENT.js

// import { Text } from "react-native";
// import { styles } from "../styles/styles";
// import { View } from "react-native-web";

// export const First = () => {
//   return (
//     <View>
//       <Text style={styles.text}>Meu Primeiro Componente</Text>
//     </View>
//   );
// };
// export const ComponentTesting = () => {
//   return (
//     <View>
//       <Text style={styles.text}>Componente de Teste :)</Text>
//     </View>
//   );
// };

// function Second() {
//   return <Text style={styles.text}>Meu Segundo Componente ;)</Text>;
// }

// const Third = () => {
//   return (
//     <View>
//       <Text style={styles.text}>Terceiro Componente °-°</Text>
//     </View>
//   );
// };

// const Fourth = () => {
//   return (
//     <View>
//       <Text style={styles.text}>Quarto Componente °o°</Text>
//     </View>
//   );
// };

// export default {
//   Second,
//   Third,
//   Fourth,
// };

// //STYLES

// import { StyleSheet } from "react-native";

// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#383F33",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     color: "#E7E4DB",
//     fontSize: 25,
//     fontStyle: "italic",
//   },
// });



// componentes pai e filho
// import { Text, View, TouchableOpacity } from "react-native";
// import { styles } from "./src/styles/styles";
// import { Button } from "react-native-web";

// // import { First, ComponentTesting } from "./src/components/SecondComponent";
// // import ComponentsExportados from "./src/components/SecondComponent";
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <FatherComponent>
//         <Text style={styles.text}>Componente Filho</Text>
//         <Text style={styles.text}>Componente Filho</Text>
//         <Text style={styles.text}>Componente Filho</Text>
//         <Text style={styles.text}>Componente Filho</Text>
//         <Text style={styles.text}>Componente Filho</Text>
//         <Text style={styles.text}>Componente Filho</Text>
//         <TouchableOpacity
//           style={styles.btn}
//           onPress={() => alert("Você apertou este botão!!!")}
//         >
//           <Text style={styles.text}>Botão do componente Pai !</Text>
//         </TouchableOpacity>
//       </FatherComponent>
//     </View>
//   );
// }

// function FatherComponent({ children }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Texto do componente Pai</Text>
//       {children}
//     </View>
//   );
// }
