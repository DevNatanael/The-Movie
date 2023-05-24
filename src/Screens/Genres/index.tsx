/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native';

const apiKey = '8ff1cf2a';

export function Genres({navigation}: any) {
  const [movie, setMovie] = useState(null);
  const [movieRecommendation, setMovieRecommendation] = useState('');
  const [countGenre, setCountGenre] = useState(0);
  const [genres, setGenres] = useState<any>({
    drama: '',
    acao: '',
    comedia: '',
    terror: '',
    ficCien: '',
    romance: '',
    suspense: '',
    animacao: '',
  });

  function getRandomMoviesByGenres() {
    const genreKeys = Object.keys(genres);
    const promises = genreKeys.map(key => {
      const genre = genres[key];
      if (genre) {
        const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${genre}&type=movie`;
        return fetch(url).then(response => response.json());
      }
      return null;
    });

    Promise.all(promises)
      .then(results => {
        const movies = results.reduce((acc, data) => {
          if (data && data.Search) {
            acc = [...acc, ...data.Search];
          }
          return acc;
        }, []);

        if (movies.length > 0) {
          const randomIndex = Math.floor(Math.random() * movies.length);
          const randomMovie = movies[randomIndex];
          setMovieRecommendation(
            `Recomendamos o filme "${randomMovie.Title}"!`,
          );

          const movieUrl = `http://www.omdbapi.com/?apikey=${apiKey}&i=${randomMovie.imdbID}`;
          fetch(movieUrl)
            .then(response => response.json())
            .then(data => {
              setMovie(data);
            })
            .catch(error => console.log(error));
        } else {
          setMovieRecommendation(
            'Não encontramos filmes para os gêneros selecionados. Por favor, escolha outros gêneros.',
          );
          setMovie(null);
        }
      })
      .catch(error => console.log(error));
  }

  function generateMovie() {
    if (countGenre > 3) {
      Alert.alert('Você deve escolher apenas 3 gêneros de filmes');
      return;
    } else if (countGenre != 3) {
      Alert.alert('Escolha 3 gêneros de filmes');
      return;
    }
    getRandomMoviesByGenres();
    console.log(movie, '1');
    //navigation.navigate('Movie', {paramKey: movie})
    setTimeout(() => console.log(movie, '2'), 1000);
  }

  // async function logout() {
  //   await AsyncStorage.removeItem('checkLoged');
  //   navigation.navigate('login');
  // }

  useEffect(() => {}, [movie]);

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
              if (genres.drama === '') {
                setGenres((prevState: any) => ({...prevState, drama: 'drama'}));
                setCountGenre(countGenre + 1);
              } else {
                setGenres((prevState: any) => ({...prevState, drama: ''}));
                setCountGenre(countGenre - 1);
              }
            }}>
            <Text
              style={
                genres.drama === 'drama'
                  ? styles.textGenreSelect
                  : styles.textGenre
              }>
              Drama
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              genres.acao === 'action'
                ? styles.buttomGenreSelected
                : styles.buttomGenre
            }
            onPress={() => {
              if (genres.acao === '') {
                setGenres((prevState: any) => ({...prevState, acao: 'action'}));
                setCountGenre(countGenre + 1);
              } else {
                setGenres((prevState: any) => ({...prevState, acao: ''}));
                setCountGenre(countGenre - 1);
              }
            }}>
            <Text
              style={
                genres.acao === 'action'
                  ? styles.textGenreSelect
                  : styles.textGenre
              }>
              Ação
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.genresRow}>
          <TouchableOpacity
            style={
              genres.comedia === 'comedy'
                ? styles.buttomGenreSelected
                : styles.buttomGenre
            }
            onPress={() => {
              if (genres.comedia === '') {
                setGenres((prevState: any) => ({
                  ...prevState,
                  comedia: 'comedy',
                }));
                setCountGenre(countGenre + 1);
              } else {
                setGenres((prevState: any) => ({...prevState, comedia: ''}));
                setCountGenre(countGenre - 1);
              }
            }}>
            <Text
              style={
                genres.comedia === 'comedy'
                  ? styles.textGenreSelect
                  : styles.textGenre
              }>
              Comédia
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              genres.terror === 'horror'
                ? styles.buttomGenreSelected
                : styles.buttomGenre
            }
            onPress={() => {
              if (genres.terror === '') {
                setGenres((prevState: any) => ({
                  ...prevState,
                  terror: 'horror',
                }));
                setCountGenre(countGenre + 1);
              } else {
                setGenres((prevState: any) => ({...prevState, terror: ''}));
                setCountGenre(countGenre - 1);
              }
            }}>
            <Text
              style={
                genres.terror === 'horror'
                  ? styles.textGenreSelect
                  : styles.textGenre
              }>
              Terror
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.genresRow}>
          <TouchableOpacity
            style={
              genres.ficCien === 'sci-fi'
                ? styles.buttomGenreSelected
                : styles.buttomGenre
            }
            onPress={() => {
              if (genres.ficCien === '') {
                setGenres((prevState: any) => ({
                  ...prevState,
                  ficCien: 'sci-fi',
                }));
                setCountGenre(countGenre + 1);
              } else {
                setGenres((prevState: any) => ({...prevState, ficCien: ''}));
                setCountGenre(countGenre - 1);
              }
            }}>
            <Text
              style={
                genres.ficCien === 'sci-fi'
                  ? styles.textGenreSelect
                  : styles.textGenre
              }>
              Fic Científica
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              genres.romance === 'romance'
                ? styles.buttomGenreSelected
                : styles.buttomGenre
            }
            onPress={() => {
              if (genres.romance === '') {
                setGenres((prevState: any) => ({
                  ...prevState,
                  romance: 'romance',
                }));
                setCountGenre(countGenre + 1);
              } else {
                setGenres((prevState: any) => ({...prevState, romance: ''}));
                setCountGenre(countGenre - 1);
              }
            }}>
            <Text
              style={
                genres.romance === 'romance'
                  ? styles.textGenreSelect
                  : styles.textGenre
              }>
              Romance
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.genresRow}>
          <TouchableOpacity
            style={
              genres.suspense === 'thriller'
                ? styles.buttomGenreSelected
                : styles.buttomGenre
            }
            onPress={() => {
              if (genres.suspense === '') {
                setGenres((prevState: any) => ({
                  ...prevState,
                  suspense: 'thriller',
                }));
                setCountGenre(countGenre + 1);
              } else {
                setGenres((prevState: any) => ({...prevState, suspense: ''}));
                setCountGenre(countGenre - 1);
              }
            }}>
            <Text
              style={
                genres.suspense === 'thriller'
                  ? styles.textGenreSelect
                  : styles.textGenre
              }>
              Suspense
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              genres.animacao === 'animation'
                ? styles.buttomGenreSelected
                : styles.buttomGenre
            }
            onPress={() => {
              if (genres.animacao === '') {
                setGenres((prevState: any) => ({
                  ...prevState,
                  animacao: 'animation',
                }));
                setCountGenre(countGenre + 1);
              } else {
                setGenres((prevState: any) => ({...prevState, animacao: ''}));
                setCountGenre(countGenre - 1);
              }
            }}>
            <Text
              style={
                genres.animacao === 'animation'
                  ? styles.textGenreSelect
                  : styles.textGenre
              }>
              Animação
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttomContinue}
        onPress={() => generateMovie()}>
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
  textGenreSelect: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
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
