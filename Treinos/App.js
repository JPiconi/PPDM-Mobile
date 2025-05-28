import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

//import styles
import { styles } from './src/styles/styles.js'

import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import Fontisto from '@expo/vector-icons/Fontisto';
import Entypo from '@expo/vector-icons/Entypo';


export default function App() {
  const [quant, setQuant] = useState(1);
  const pricePerDrink = 24.9;
  const totalPrice = quant * pricePerDrink;

  const moreProduct = () => {
    setQuant(prevQuant => prevQuant + 1);
    console.log(totalPrice)
  }

  const lessProduct = () => {
    if (quant > 1) {
      setQuant(prevQuant => prevQuant - 1)
    }
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./src/assets/images/affogato.jpg")}
        style={{ width: '100%', height: '79%', resizeMode: "cover" }}>
        <TouchableOpacity style={{
          position: 'absolute',
          top: 40,
          left: 15,
          width: 48,
          height: 48,
          backgroundColor: "#372414",
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <FontAwesome5 name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
      </ImageBackground>
      <LinearGradient
        colors={['#6d3914', '#4c2808', '#000']}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '45%',
          borderTopRightRadius: 40
        }}
      >
        <View style={{ padding: 27 }}>
          <Text style={{ color: "#ab7743", fontSize: 30, letterSpacing: 2, fontStyle: "italic" }}>Affogato</Text>
          <Text style={{ color: "#825a3c", fontSize: 15, fontStyle: "italic" }} >Drink/Dessert</Text>

          <View style={{
            position: 'absolute',
            right: 35,
            top: -30,
            backgroundColor: "#260f06",
            width: 60,
            height: 110,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderRadius: 30,
            gap: 5
          }}>
            <TouchableOpacity style={{
              width: 20,
              height: 20,
              backgroundColor: "#683924",
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center'
            }}
              onPress={moreProduct}>
              <Text style={{ color: 'white' }}>+</Text>
            </TouchableOpacity>
            <Text style={{
              color: 'white',
              fontSize: 16,
              width: 20,
              height: 20,
              backgroundColor: "#683924",
              borderRadius: 20,
              textAlign: 'center'
            }}>{quant}</Text>
            <TouchableOpacity style={{
              width: 20,
              height: 20,
              backgroundColor: "#683924",
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center'
            }} onPress={lessProduct}>
              <Text style={{ color: 'white' }}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "100%", marginTop: 10, gap: 20, flexDirection: "row", }}>
            <View style={{
              padding: 10,
              borderWidth: 1,
              borderColor: "#d7bda6",
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center"
            }}>
              <Text style={{ color: "#d7bda6" }}>35%</Text>
              <Text style={{ color: "#d7bda6", fontStyle: "italic" }}>Vanilla Ice Cream</Text>
            </View>
            <View style={{
              padding: 10,
              borderWidth: 1,
              borderColor: "#d7bda6",
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center"
            }}>
              <Text style={{ color: "#d7bda6" }}>50%</Text>
              <Text style={{ color: "#d7bda6", fontStyle: "italic" }}>Hot espresso</Text>
            </View>
            <View style={{
              padding: 10,
              borderWidth: 1,
              borderColor: "#d7bda6",
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center"
            }}>
              <Text style={{ color: "#d7bda6" }}>15%</Text>
              <Text style={{ color: "#d7bda6", fontStyle: "italic" }}>Chocolate shavings</Text>
            </View>
          </View>
          <View style={{ width: '100%', gap: 20, flexDirection: 'row', marginTop: 20, justifyContent: "'center" }}>
            <View style={{ width: '40%', backgroundColor: "#6d3914", padding: 15, borderRadius: 80 }}>
              <Text style={{ color: '#ab7743' }}>$24,90 <Text style={{ color: "#825a3c", fontStyle: "italic" }}> Price per drink</Text></Text>
            </View>
            <View style={{ width: '40%', backgroundColor: "#6d3914", padding: 15, borderRadius: 80 }}>
              <Text style={{ color: '#ab7743' }}>$ {totalPrice.toFixed(2)} <Text style={{ color: "#825a3c", fontStyle: "italic" }}> Total Price</Text></Text>
            </View>
          </View>

        </View>

        <View style={{ flex: 1, backgroundColor: '#000', paddingLeft: 30 }}>
          <Text style={{ color: '#d7bda6', fontSize: 17, marginTop: 20, fontStyle: "italic" }}>Total Order</Text>

          <View style={{ width: '80%', paddingTop: 20, flexDirection: 'row', gap: 20, justifyContent: 'space-evenly' }}>
            <View style={{ alignItems: 'center', width: 80, height: 60, justifyContent: "flex-end" }}>
              <Fontisto name="coffeescript" size={24} color="#e8b985" />
              <Text style={{ color: '#ab7743', fontSize: 16, fontStyle: "italic" }}>Cart Total</Text>
            </View>

            <View style={{ alignItems: 'center', width: 80, height: 60, justifyContent: 'flex-end' }}>
              <Text style={{ color: '#e8b985', fontSize: 17, fontStyle: "italic" }}>Total Price</Text>
              <Text style={{ color: '#ab7743', fontSize: 17 }}>${totalPrice.toFixed(2)}</Text>
            </View>
          </View>

          <View style={{
            position: 'absolute',
            right: 35,
            top: 25,
            backgroundColor: "#260f06",
            width: 60,
            height: 110,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderRadius: 30,
            gap: 5
          }}>
            <Entypo name="credit-card" size={24} color='#e8b985' />
            <Text style={{ color: 'white', fontSize: 9, fontStyle: "italic" }}>MasterCard</Text>
            <Text style={{ color: 'white', fontStyle: "italic" }}>Pay</Text>
          </View>
        </View>
      </LinearGradient>
    </View >
  );
}

