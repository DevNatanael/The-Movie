import React from 'react';
import {Button, Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export function Genres({navigation}: any) {
  function openScreen() {
    navigation.navigate('Movie');
  }

  async function logout() {
    await AsyncStorage.removeItem('checkLoged');
    // navigation.navigate('login');
  }

  return (
    <View>
      <Text>Geneross</Text>
      <Button title="Mudar tela" onPress={openScreen} />
      <Button title="Sair" onPress={logout} />
    </View>
  );
}
