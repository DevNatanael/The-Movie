import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export function Login({navigation}: any) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function openScreen() {
    navigation.navigate('register');
  }

  const handleLogin = async () => {
    try {
      const savedUsername = await AsyncStorage.getItem('username');
      const savedPassword = await AsyncStorage.getItem('password');

      if (username === savedUsername && password === savedPassword) {
        console.log('logar');
      } else {
        Alert.alert('Nome de usuário ou senha incorretos.');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Erro ao recuperar os dados do usuário.');
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />

      <View style={styles.registerArea}>
        <Text>Não é cadastrado?</Text>
        <TouchableOpacity onPress={openScreen} style={styles.btnRegister}>
          <Text style={styles.textRegister}>Cadastre-se aqui!</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0f9',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  registerArea: {
    flexDirection: 'row',
  },
  textRegister: {
    color: '#B43239',
  },
  btnRegister: {
    marginLeft: 4,
  },
});
