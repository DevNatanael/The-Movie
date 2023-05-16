/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {ActivityIndicator, View} from 'react-native';
import AppRoutes from './AppRoutes';
// import AuthNavigator from './AuthNavigator';
import {AuthUse} from '../context/auth';

export function Routes() {
  const {checkLoged, loading} = AuthUse();

  console.log(checkLoged, 'routes');

  if (loading) {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
        <ActivityIndicator size={100} color="#666" />
      </View>
    );
  }

  return <AppRoutes />;

  // return checkLoged === 'logado' ? <AppRoutes /> : <AuthNavigator />;
}
