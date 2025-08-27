import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useNavigation } from '@react-navigation/native';

//import reanimated
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate
} from 'react-native-reanimated';

//import axios
import axios from 'axios';

const Stack = createNativeStackNavigator();

const { width } = Dimensions.get("screen");
const imageWidth = width * 0.7;
const imageHeight = imageWidth * 1.76;
const spacing = 20;

function Posters({ item, index, scrollX }) {
  const stylez = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(scrollX.value, [index - 1, index, index + 1], [1.6, 1, 1.6])
        },
        {
          rotate: `${interpolate(scrollX.value, [index - 1, index, index + 1], [15, 1, -15])}deg`
        }
      ]
    }
  });
  return (
    <View style={{
      width: imageWidth,
      height: imageHeight,
      overflow: 'hidden',
      borderRadius: 0
    }}>
      <Animated.Image source={{ uri: item }} style={[{ flex: 1 }, stylez]} />
    </View>
  )
}

function BackdropPoster({ poster, index, scrollX }) {
  const stylez = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollX.value, [index - 1, index, index + 1], [0, 1, 0])
    }
  });
  return (
    <Animated.Image source={{ uri: poster }}
      style={[StyleSheet.absoluteFillObject, stylez]}
      blurRadius={10} />
  )
}

export default function Filmes() {

  const navigation = useNavigation();
  const [data, setData] = useState([]);

  //useSharedValue => Reativo as animações, quando o nosso scrollX.value for alterado
  // todas as animações serão alteradas.
  const scrollX = useSharedValue(0)

  // useAnimatedScrollHandler => Hook do reanimated, que serve para escutar o evento de
  // rolagem (onScroll) da nossa lista
  const onScroll = useAnimatedScrollHandler((e) => {
    //e.contentOffset.x => Distancia em pixels que a lista ja foi rolada na horizontal
    //scrollX.value = 320 / (300 + 20)
    //scrollX.value = 0
    //scrollX.value = 1
    //scrollX.value = 2
    scrollX.value = e.contentOffset.x / (imageWidth + spacing);
  })

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `http://www.omdbapi.com/?s=movie&page=1&apikey=b28393be`,
      );
      const moviePosters = res.data.Search.map(movie => movie.Poster)
      console.log(moviePosters)
      setData(moviePosters);
    } catch (error) {
      console.log("Erro ao buscar as imagens: ", error)
    }

  }

  const Return = () => {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      {/* position: absolute, bottom: 0, top: 0, left: 0, right: 0*/}
      <View style={StyleSheet.absoluteFillObject}>
        {data.map((poster, index) => (
          <BackdropPoster key={index} poster={poster} index={index} scrollX={scrollX} />
        ))}
      </View>
      <Animated.FlatList
        data={data}
        keyExtractor={(index) => String(index)}
        horizontal
        style={{ flexGrow: 0 }}
        snapToInterval={imageWidth + spacing}
        //snapToInterval => faz com que a rolagem pare extamente a cada intervalo especificado
        // nesse caso, o tamanho da imagem, mais o gap (spacing)
        decelerationRate={'fast'}
        //decelerationRate => Controla a velocidade da desaceleração da nossa rolagem
        contentContainerStyle={{
          gap: spacing,
          paddingHorizontal: (width - imageWidth) / 2,
          // backgroundColor: '#b0d2ec',
          // alignItems: "center"
        }}
        //contentContainerStyle => Aplicar estilo no conteúdo interno do nosso FlatList
        renderItem={({ item, index }) => <Posters item={item} index={index} scrollX={scrollX} />}
        onScroll={onScroll}
        // onScroll => Função chamada enquanto 'rolamos' nossa lista
        scrollEventThrottle={16}
        //scrollEventThrottle => Define a frequência que o evento onScroll é chamado (60Fps)
        showsHorizontalScrollIndicator={false}
      // showsHorizontalScrollIndicator => Oculta a 'barrinha' horizontal da nossa "rolagem"
      />

      <TouchableOpacity style={styles.Button} onPress={Return}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button: {
    backgroundColor: '#e5dac9',
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 5,
  }
});
