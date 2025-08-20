import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Pressable } from 'react-native';
import { styles } from '../styles/Styles';

import AntDesign from '@expo/vector-icons/AntDesign';

import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
  const navigation = useNavigation();
  return (
    <ImageBackground style={styles.container}
      source={require("../images/luaUp.jpg")}
      resizeMode="cover">
      <View style={styles.container1}>
        <AntDesign name="staro" size={45} color="#616e69" />
        <Text style={{
          fontSize: 28,
          top: 5,
          fontStyle: 'italic',
          marginBottom: 28,
          alignSelf: 'center',
          color: '#e5dac9',
        }}>Welcome! Sign Up to be part of us!</Text>


        <TextInput
          placeholder="name"
          value={Text}
          style={styles.input}
          autoCapitalize="none"
        />

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
          <Text style={styles.baixo}>Already Have an account? </Text>
          <Pressable onPress={() => navigation.navigate('SignIn')}><Text style={styles.baixo3}>Sign In!</Text></Pressable>
        </View>
      </View>

    </ImageBackground>
  );
}
