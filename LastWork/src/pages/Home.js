import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from '@expo/vector-icons/AntDesign';
import { ImageBackground } from 'react-native';

export default function Home() {

  return (
    // <LinearGradient
    //   colors={['#ff5100', '#d33d03', '#a72906', '#7b1509', '#4f000b']}
    //   style={styles.container}
    // >
    <ImageBackground style={styles.container}
      source={require("../images/uau.jpg")}
      resizeMode="cover">

      <Text style={{
        fontSize: 28,
        fontStyle: 'italic',
        marginBottom: 5,
        alignSelf: 'center',
        color: '#e2d2b8'
      }}>Welcome!</Text>
      <Text style={{
        fontSize: 28,
        fontStyle: 'italic',
        alignSelf: 'center',
        color: '#e2d2b8'
      }}>Make yourself at Home!</Text>
    </ImageBackground >
    // </LinearGradient >
  );
}
