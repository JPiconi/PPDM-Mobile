import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Pressable, StyleSheet, Dimensions } from 'react-native';
import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { setItem } from '../components/AsyncStorage';


const { width, height } = Dimensions.get('window')
export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const Bora = async () => {
    if (email.trim() === '' || senha.trim() === '') {
      alert('Atenção, Preencha todos os campos para continuar!');
      return;
    }
    await setItem("login", "logado")
    navigation.navigate("Home");
  };

  return (
    <ImageBackground style={styles.container}
      source={require("../assets/images/download.png")}
      resizeMode="cover"
      blurRadius={8}>
      <View>
        <Text style={{
          fontSize: 35,
          marginBottom: 20,
          alignSelf: 'center',
          color: '#e5dac9',
        }}>Sign In!</Text>

        <TextInput
          placeholder="E-mail"
          placeholderTextColor='#000'
          style={styles.input}
          keyboardType='email-address'
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}

        />

        <TextInput
          placeholder="Senha"
          placeholderTextColor='#000'
          style={styles.input}
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={styles.Button} onPress={Bora} >
          <Text style={styles.text}>Sign In !</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
    color: 'Black',
    backgroundColor: '#c9c8c7',
    borderRadius: 30,
    width: 250,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 17,
    borderColor: '#555500',
    borderWidth: 2,
  },
  Button: {
    backgroundColor: '#e5dac9',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 5,
  },
  text: {
    fontSize: 20,
    alignSelf: 'center'
  },

  lottie: {
    width: width * 0.9,
    height: width,
    marginbottom: 200
  },
});



