import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';

//import styles
import { styles } from '../styles/styles';

import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function About() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        style={{
          width: 48,
          height: 48,
          borderRadius: 48,
          backgroundColor: "#1c2b38",
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: 40,
          left: 20
        }}
        onPress={() => navigation.openDrawer()}
      >
        <AntDesign name="menu-fold" size={24} color="#b3b7ba" />
      </TouchableOpacity> */}
    </View>
  );
}

