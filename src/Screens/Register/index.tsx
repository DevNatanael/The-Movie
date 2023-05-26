/* eslint-disable eqeqeq */
import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {useNavigation} from '@react-navigation/native';

export function Register({navigation}: any) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {goBack} = useNavigation();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('As senhas não correspondem.');
      return;
    }

    if (username.length == 0) {
      Alert.alert('Informe o nome do usuário!');
      return;
    }

    if (password.length == 0 && confirmPassword.length == 0) {
      Alert.alert('Informe sua senha!');
      return;
    }

    try {
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);
      Alert.alert('Dados salvos com sucesso!');
      setTimeout(() => {
        navigation.navigate('login');
      }, 1100);
    } catch (error) {
      console.log(error);
      Alert.alert('Erro ao salvar os dados.');
    }
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttomBack} onPress={() => goBack()}>
          <Icon name="chevron-left" size={30} color="#fff" />
        </TouchableOpacity>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholder="Usuário"
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
          <TextInput
            style={styles.input}
            placeholder="Confirmar senha"
            placeholderTextColor="#fff"
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageArea}
          source={require('../../assets/cinema.png')}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 550,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    padding: 20,
  },
  buttomBack: {
    backgroundColor: '#B43239',
    width: '14%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: '30%',
    borderRadius: 6,
  },
  inputArea: {
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
    height: '8.5%',
    borderRadius: 5,
    marginTop: 240,
    marginBottom: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  imageContainer: {
    width: '110%',
    height: 400,
    alignItems: 'center',
    backgroundColor: '#f00',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imageArea: {
    height: '100%',
    width: '100%',
  },
});
