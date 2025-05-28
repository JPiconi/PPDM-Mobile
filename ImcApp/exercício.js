import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Modal, Button } from 'react-native';
import { styles } from './src/assets/styles/styles';
import { useState } from "react";


export default function App() {
  //useState -> HOOK que permite criar uma variável de estado.
  // Este HOOK retorna um arry com dois valores ( valor atual e função de atualização ).
  const [nome, setNome] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View style={styles.container}>
      <TextInput placeholder='Digite seu nome'
        value={nome}
        onChangeText={(value) => setNome(value)}
        style={{ width: '80%', borderBottomWidth: 1, borderColor: "#000" }}
      />
      {nome ? <Text style={{ color: "#743014" }}>Hi {nome}, Welcome!!</Text> : null}

      <Button
        title='Abrir Modal'
        onPress={() => setModalVisible(!modalVisible)} />
      <Modal transparent={true} visible={modalVisible} animationType='slide'>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.text}>My first Modal</Text>

            <Button
              title='Fechar Modal'
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}
