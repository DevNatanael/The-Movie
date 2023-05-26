/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {translate} from '@vitalets/google-translate-api';

export const Movie = ({navigation, route}: any) => {
  const [translatedPlot, setTranslatedPlot] = useState('');
  const dataMovie = route.params.paramKey;
  const translatePlot = async () => {
    const {text} = await translate(dataMovie.Plot, {to: 'pt'});
    setTranslatedPlot(text);
  };
  useEffect(() => {
    translatePlot();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{dataMovie.Title}</Text>
        <Text style={styles.rating}>Nota: {dataMovie.imdbRating}</Text>
        <Text style={styles.director}>{translatedPlot}</Text>
        <Text style={styles.director}>Diretor: {dataMovie.Director}</Text>
        <Text style={styles.writer}>Roteirista: {dataMovie.Writer}</Text>
        <Text style={styles.actors}>Atores: {dataMovie.Actors}</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          navigation.navigate('Genres');
        }}>
        <Text style={styles.buttonText}>Gerar Outro Filme</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={[styles.buttonContainer, styles.changeButton]}
        onPress={() => {
          navigation.navigate('Genres');
        }}>
        <Text style={[styles.buttonText, styles.changeButtonText]}>
          Mudar Categorias
        </Text>
      </TouchableOpacity> */}
      <Image source={require('../../assets/fade.png')} style={styles.fade} />
      <Image
        source={{uri: dataMovie?.Poster}}
        style={styles.poster}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  poster: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    zIndex: -2,
  },
  fade: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -1,
    opacity: 0.9,
  },
  infoContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    marginTop: '70%',
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
  director: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
  writer: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
  actors: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
  buttonContainer: {
    backgroundColor: '#B43239',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 5,
    marginHorizontal: 20,
    marginTop: 50,
    width: 200,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  changeButton: {
    backgroundColor: 'black',
    borderColor: 'black',
    marginTop: 1,
    fontWeight: 'light',
  },
  changeButtonText: {
    color: '#B43239',
  },
});
