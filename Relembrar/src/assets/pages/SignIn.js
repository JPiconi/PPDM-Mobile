import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Pressable } from 'react-native';
import { styles } from '../styles/Styles';

import { useNavigation } from '@react-navigation/native';

import AntDesign from '@expo/vector-icons/AntDesign';

export default function SignIn() {
  const navigation = useNavigation();
  return (
    <ImageBackground style={styles.container}
      source={require("../images/luaIn.jpg")}
      resizeMode="cover">
      <View style={styles.container1}>

        <AntDesign name="staro" size={45} color="#616e69" />
        <Text style={{
          fontSize: 30,
          marginBottom: 5,
          alignSelf: 'center',
          color: '#e5dac9',
        }}>Hello again!</Text>
        <Text style={{
          fontSize: 25,
          marginBottom: 20,
          alignSelf: 'center',
          color: '#e5dac9',
        }}>Sign In!</Text>

        <TextInput
          placeholder="E-mail"
          style={styles.input}
          keyboardType='email-address'
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry={true}
        />
        <View style={styles.ViewSignUp}>
          <Text style={styles.baixo}>Don't Have an account? </Text>
          <Pressable onPress={() => navigation.navigate('SignUp')}><Text style={styles.baixo3}>Sign Up!</Text></Pressable>
        </View>
      </View>
    </ImageBackground >
  );
}
