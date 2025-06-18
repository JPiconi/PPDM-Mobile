import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../styles/styles';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const login = () => {
    if (email === 'juliaap.piconi@gmail.com' && senha === '55879') {
      navigation.navigate('Home');
    } else {
      alert('Email ou Senha Incorretos, por favor tente novamente');
    }
  };

  return (
    <ImageBackground style={styles.container}
      source={require("../images/orange.jpg")}
      resizeMode="cover">
      <View style={styles.container1}>
        {/* style={styles.container} */}
        <Text style={{
          fontSize: 30,
          fontStyle: 'italic',
          marginBottom: 30,
          alignSelf: 'center',
          color: '#e2d2b8',
        }}>Login</Text>

        <TextInput
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType='email-address'
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          style={styles.input}
          secureTextEntry={true}
        />
        <View style={styles.button1}>
          <TouchableOpacity style={styles.button} onPress={login}>

            <Text style={styles.buttonText}>Entrar <AntDesign name="login" size={20} color="#e2d2b8" /></Text>
          </TouchableOpacity>
        </View>

      </View>
    </ImageBackground>
  );
}
