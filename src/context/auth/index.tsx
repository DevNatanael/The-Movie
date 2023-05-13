/* eslint-disable react/react-in-jsx-scope */
import {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';

interface AuthType {
  loading: boolean;
  checkLoged: string | null;
}

export const AuthContext = createContext<AuthType>({} as AuthType);

export const AuthProvider = ({children}: any) => {
  const [loading, setLoading] = useState(false);
  const [checkLoged, setCheckLoged] = useState<string | null>('');

  async function getConnection() {
    setLoading(true);
    try {
      const checkConnection = await AsyncStorage.getItem('checkLoged');
      setCheckLoged(checkConnection);
    } catch (error: any) {
      console.log(error);
      Alert.alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getConnection();
  }, []);

  return (
    <AuthContext.Provider value={{checkLoged, loading}}>
      {children}
    </AuthContext.Provider>
  );
};

export const AuthUse = () => {
  return useContext(AuthContext);
};
