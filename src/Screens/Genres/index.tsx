/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export function Genres({navigation}: any) {
  const [countGenre, setCountGenre] = useState(0);
  const [genres, setGenres] = useState({
    drama: '',
    acao: '',
    comedia: '',
    terror: '',
    ficCien: '',
    romance: '',
    suspense: '',
    animacao: '',
  });

  function openScreen() {
    navigation.navigate('Movie');
  }

  // async function logout() {
  //   await AsyncStorage.removeItem('checkLoged');
  //   navigation.navigate('login');
  // }

  return (
    <View style={styles.container}>
      <View style={styles.headerArea}>
        <Text style={styles.textHeader}>
          {' '}
          Selecione seus <Text style={{color: '#B43239'}}>gêneros</Text>{' '}
          favoritos
        </Text>
      </View>
      <View style={styles.genresArea}>
        <View style={styles.genresRow}>
          <TouchableOpacity
            style={
              genres.drama === 'drama'
                ? styles.buttomGenreSelected
                : styles.buttomGenre
            }
            onPress={() => {
              if (countGenre === 3) {
                console.log('esta cheio');
              } else {
                if (genres.drama === '') {
                  setGenres(prevState => ({...prevState, drama: 'drama'}));
                  setCountGenre(countGenre + 1);
                } else {
                  setGenres(prevState => ({...prevState, drama: ''}));
                  setCountGenre(countGenre - 1);
                }
              }
            }}>
            <Text style={styles.textGenre}>Drama</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              genres.acao === 'action'
                ? styles.buttomGenreSelected
                : styles.buttomGenre
            }
            onPress={() => {
              if (countGenre === 3) {
                console.log('esta cheio');
              } else {
                if (genres.acao === '') {
                  setGenres(prevState => ({...prevState, acao: 'action'}));
                  setCountGenre(countGenre + 1);
                } else {
                  setGenres(prevState => ({...prevState, acao: ''}));
                  setCountGenre(countGenre - 1);
                }
              }
            }}>
            <Text style={styles.textGenre}>Ação</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.genresRow}>
          <TouchableOpacity
            style={styles.buttomGenre}
            onPress={() =>
              setGenres(prevState => ({...prevState, comedia: 'comedy'}))
            }>
            <Text style={styles.textGenre}>Comédia</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttomGenre}
            onPress={() =>
              setGenres(prevState => ({...prevState, terror: 'horror'}))
            }>
            <Text style={styles.textGenre}>Terror</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.genresRow}>
          <TouchableOpacity
            style={styles.buttomGenre}
            onPress={() =>
              setGenres(prevState => ({...prevState, ficCien: 'sci-fi'}))
            }>
            <Text style={styles.textGenre}>Fic científica</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttomGenre}
            onPress={() =>
              setGenres(prevState => ({...prevState, romance: 'romance'}))
            }>
            <Text style={styles.textGenre}>Romance</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.genresRow}>
          <TouchableOpacity
            style={styles.buttomGenre}
            onPress={() =>
              setGenres(prevState => ({...prevState, suspense: 'thriller'}))
            }>
            <Text style={styles.textGenre}>Suspense</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttomGenre}
            onPress={() =>
              setGenres(prevState => ({...prevState, animacao: 'animation'}))
            }>
            <Text style={styles.textGenre}>Animação</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttomContinue}
        onPress={() => console.log(genres, '||', countGenre)}>
        <Text style={styles.textBtnCon}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#000',
    padding: 20,
    height: '100%',
    width: '100%',
  },
  textHeader: {
    color: '#fff',
    fontSize: 25,
  },
  textBtnCon: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textGenre: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  headerArea: {
    width: '70%',
    height: '12%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    // backgroundColor: '#f1f',
  },
  genresArea: {
    width: '70%',
    height: '60%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: '#f00',
  },
  genresRow: {
    width: '100%',
    height: '12%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // backgroundColor: '#f1f',
    marginBottom: '2%',
    flexDirection: 'row',
  },
  buttomBack: {
    backgroundColor: '#B43239',
    width: '14%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  buttomContinue: {
    backgroundColor: '#B43239',
    width: '40%',
    height: '7%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  buttomGenre: {
    backgroundColor: '#fff',
    width: '45%',
    height: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  buttomGenreSelected: {
    backgroundColor: '#B43239',
    width: '45%',
    height: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
});
