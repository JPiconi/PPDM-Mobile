import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';

//import styles
import { styles } from '../styles/styles';

//Quando importamos o useNavigation ele nos retorna uma instância de navegação
//isso nos permite acessar todos os métodos referente a navegação ( navigate, goBack )
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Home() {
  const navigation = useNavigation()
  return (
    <View>

    </View>
  );
}

