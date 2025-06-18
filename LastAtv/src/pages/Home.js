import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from '../styles/styles';

export default function Home({ rota }) {
  const { userEmail } = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo(a)!</Text>
      <Text style={styles.welcomeText}>Você está logado como:</Text>
      <Text style={styles.emailText}>{userEmail}</Text>
    </View>
  );
}
