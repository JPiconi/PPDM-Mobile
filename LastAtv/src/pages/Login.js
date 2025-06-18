import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';
import { useState } from 'react';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const login = () => {
    if (email === 'juliaap.piconi@gmail.com' && senha === '55879') {
      navigation.navigate('Home', { userEmail: email });
    } else {
      alert('Email ou Senha Incorretos, por favor tente novamente');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title1}>Login</Text>

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
      />

      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
