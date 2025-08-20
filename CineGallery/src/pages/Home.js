import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ navigation, setLogado }) {
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('logado');
      setLogado(false);
    } catch (e) {
      Alert.alert('Erro', 'Falha ao sair.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bem-vindo ao CineGallery!</Text>
      <Button title="Ver Galeria de Filmes" onPress={() => navigation.navigate('Filmes')} />
      <View style={{ height: 10 }} />
      <Button title="Sair" color="red" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  welcome: { fontSize: 24, marginBottom: 20 }
});
