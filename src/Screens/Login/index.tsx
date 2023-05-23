/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export function Login({navigation}: any) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const refScroll = useRef(null);

  function openScreen() {
    navigation.navigate('register');
  }

  const handleLogin = async () => {
    try {
      const savedUsername = await AsyncStorage.getItem('username');
      const savedPassword = await AsyncStorage.getItem('password');

      if (username === savedUsername && password === savedPassword) {
        await AsyncStorage.setItem('checkLoged', 'logado');
        navigation.navigate('Genres');
      } else {
        Alert.alert('Nome de usuário ou senha incorretos.');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Erro ao recuperar os dados do usuário.');
    }
  };
  return (
    <ScrollView ref={refScroll}>
      <View style={styles.generalContainer}>
        <View style={styles.container}>
          <Text style={styles.titleApp}>The Movie</Text>
          <View style={styles.intputArea}>
            <TextInput
              style={styles.input}
              placeholder="Login"
              placeholderTextColor="#fff"
              value={username}
              onChangeText={text => setUsername(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#fff"
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry
            />
          </View>

          <View style={styles.registerArea}>
            <Text style={{color: '#ffff'}}>Não é cadastrado?</Text>
            <TouchableOpacity onPress={openScreen} style={styles.btnRegister}>
              <Text style={styles.textRegister}>Cadastre-se aqui!</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageArea}
            source={require('../../assets/cinema.png')}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  generalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    padding: 20,
    height: 580,
    width: '100%',
  },
  intputArea: {
    width: '100%',
    position: 'absolute',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    color: '#fff',
  },
  button: {
    backgroundColor: '#B43239',
    width: '33%',
    height: '7.5%',
    borderRadius: 5,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  registerArea: {
    flexDirection: 'row',
    marginTop: '70%',
  },
  textRegister: {
    color: '#B43239',
  },
  btnRegister: {
    marginLeft: 4,
  },
  titleApp: {
    color: '#B43239',
    marginTop: '23%',
    fontSize: 40,
    fontFamily: 'Raleway',
    position: 'absolute',
    marginBottom: '170%',
    fontWeight: 'bold',
  },
  imageContainer: {
    width: '100%',
    height: 280,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  imageArea: {
    height: '100%',
    width: '100%',
  },
});
