import { Text, TouchableOpacity } from "react-native";

import { styles } from "../../styles/styles";

export default function TouchComponents({ funcClickBtn, text }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={funcClickBtn}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
