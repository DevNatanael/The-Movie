import React from 'react';
import {Button, Text, View} from 'react-native';

export function Genres({navigation}: any) {
  function openScreen() {
    navigation.navigate('Movie');
  }

  return (
    <View>
      <Text>Geneross</Text>
      <Button title="Mudar tela" onPress={openScreen} />
    </View>
  );
}
