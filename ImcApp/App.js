//Importações.
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button, Modal } from 'react-native';
//importação do styles que se encontra em uma pasta diferente.
import { styles } from "./src/assets/styles/styles";
//importação da variável de estado do react.
import { useState } from "react";

export default function App() {
  //declaração de variáveis, utilizando o HOOK use state, como a variável de estado.
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [classes, setClasses] = useState('');
  const [resultado, setResultado] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  //declaração da variável para o calculo do imc
  const calcBMI = () => {
    //alerta que será enviado caso não tenha sido posto os valores para peso ou altura.
    if (!peso || !altura) {
      alert("Por favor, insira o peso e a altura.");
      return;
    }
    // variável responsável por fazer a conta do imc, pegando o peso e dividindo pela altura ao quadrado(altura*altura).
    const imc = peso / (altura * altura);
    //regulando o imc para que apareça apenas duas casas decimais após a vírgula.
    setResultado(imc.toFixed(2));
    //criação dos if's que ajudaram na identificação de cada classificação de peso do IMC
    if (imc < 18.5) {
      setClasses("Underweight!");
    } else if (imc >= 18.5 && imc <= 24.9) {
      setClasses("Normal weight!");
    } else if (imc >= 25 && imc <= 29.9) {
      setClasses("Overweight!");
    } else if (imc >= 30 && imc <= 34.9) {
      setClasses("Obesity!");
    } else {
      setClasses("Extreme Obesity!");
    }
    //Fazendo com que o Modal se torne visivel
    setModalVisible(true);
  };
  //assim que tudo ocorrer tudo abaixo será feito.
  return (
    <View style={styles.container}>
      {/* text de introdução da página. */}
      <Text style={styles.titulo}>Let's calculate your BMI !</Text>
      {/* BMI (body mass index) é IMC em Inglês! */}
      {/* TextInput, local para que sejam postos os valores que se pedem, neste caso, colocar um valor para peso, apenas em forma de números. */}
      <TextInput
        style={styles.input}
        placeholderTextColor="#e8d1a7"
        placeholder="Please, Enter your Weight"
        keyboardType="numeric"
        value={peso}
        onChangeText={(value) => setPeso(value)}
      />
      {/* TextInput, local para que sejam postos os valores que se pedem, neste caso, colocar um valor para altura, apenas em forma de números. */}
      <TextInput
        style={styles.input}
        placeholderTextColor="#e8d1a7"
        placeholder="Please, Enter your Height"
        keyboardType="numeric"
        value={altura}
        onChangeText={(value) => setAltura(value)}
      />
      {/* Botão que fará que o modal apareça */}
      <Button title="Calculate BMI !" onPress={calcBMI} />
      {/* Modal, forma de animação fade, mas podia ser o slide ou não ter (none) */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onPress={() => setModalVisible(false)}
      >
        {/* Texts que darão um "tcham" nas informações */}
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            {/* Text de Introdução ao resultado das contas do imc */}
            <Text style={{
              fontSize: 20,
              marginBottom: 10,
              color: '#e8d1a7',
              fontStyle: 'italic',
            }}>BMI Result!</Text>
            {/* Text do resutado da conta do imc */}
            <Text style={{
              fontSize: 18,
              marginBottom: 10,
              color: '#e8d1a7',
              fontStyle: 'italic',
            }}>{resultado}</Text>
            {/* Text que dirá em qual classificação seu imc se encontra. */}
            <Text style={{
              fontSize: 16,
              marginBottom: 20,
              color: '#e8d1a7',
              fontStyle: 'italic',
            }}>{classes}</Text>
            {/* Botão que fará com que o modal seja fechado após a leitura do seu resultado.*/}
            <Button title="Close !" onPress={() => setModalVisible(false)} />
            <StatusBar style="auto" />
          </View>
        </View>
      </Modal>
    </View>
  );
}
