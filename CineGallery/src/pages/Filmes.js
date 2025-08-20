import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, StyleSheet, Alert, Dimensions } from 'react-native';
import axios from 'axios';

const API_KEY = 'SUA_API_KEY_TMDB'; // Substitua pela sua chave TMDB

export default function GalleryScreen() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`);
        setFilmes(res.data.results.slice(0, 10));
      } catch (e) {
        Alert.alert('Erro', 'Falha ao carregar filmes.');
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={filmes}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
              style={styles.poster}
              resizeMode="cover"
            />
            <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const { width } = Dimensions.get('window');
const posterWidth = (width / 2) - 30;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  card: { flex: 1, margin: 10, alignItems: 'center' },
  poster: { width: posterWidth, height: posterWidth * 1.5, borderRadius: 10 },
  title: { marginTop: 8, fontWeight: 'bold', textAlign: 'center' }
});
