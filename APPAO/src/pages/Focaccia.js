import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';

//import styles
import { styles } from '../styles/styles';

import { useNavigation } from '@react-navigation/native';


export default function Focaccia() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
    </View>
  );
}
