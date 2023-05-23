/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';

export function Genres({navigation}: any) {
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
        <Button title="Filmes" onPress={openScreen} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#000',
    padding: 20,
    height: '100%',
    width: '100%',
  },
  textHeader: {
    color: '#fff',
    fontSize: 25,
  },
  headerArea: {
    width: '70%',
    height: '12%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  buttomBack: {
    backgroundColor: '#B43239',
    width: '14%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
});
