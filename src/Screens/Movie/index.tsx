import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

export const Movie = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Nós</Text>
        <Text style={styles.rating}>Nota: 8.5</Text>
        <Text style={styles.director}>
          Adelaide e Gabe levam a família para passar um fim de semana na praia
          e descansar. Eles começam a aproveitar o ensolarado local, mas a
          chegada de um grupo misterioso muda tudo e a família se torna refém de
          seres com aparências iguais às suas.
        </Text>
        <Text style={styles.director}>Diretor: John Doe</Text>
        <Text style={styles.writer}>Roteirista: Jane Smith</Text>
        <Text style={styles.actors}>
          Atores: John Doe, Jane Smith, Bob Johnson
        </Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>GENERATE AGAIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonContainer, styles.changeButton]}
        onPress={() => {
          navigation.navigate('Genres');
        }}>
        <Text style={[styles.buttonText, styles.changeButtonText]}>
          Change categories
        </Text>
      </TouchableOpacity>
      {/* <Image source={require('./assets/fade.png')} style={styles.fade} />
      <Image
        source={require('./assets/poster.jpg')}
        style={styles.poster}
        resizeMode="cover"
      /> */}
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
