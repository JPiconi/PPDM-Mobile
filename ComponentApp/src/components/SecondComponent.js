import { Text } from "react-native";
import { styles } from "../styles/styles";
import { View } from "react-native-web";

export const First = () => {
  return (
    <View>
      <Text style={styles.text}>Meu Primeiro Componente</Text>
    </View>
  );
};
export const ComponentTesting = () => {
  return (
    <View>
      <Text style={styles.text}>Componente de Teste :)</Text>
    </View>
  );
};

function Second() {
  return <Text style={styles.text}>Meu Segundo Componente ;)</Text>;
}

const Third = () => {
  return (
    <View>
      <Text style={styles.text}>Terceiro Componente °-°</Text>
    </View>
  );
};

const Fourth = () => {
  return (
    <View>
      <Text style={styles.text}>Quarto Componente °o°</Text>
    </View>
  );
};

export default {
  Second,
  Third,
  Fourth,
};
