/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './src/routes';
import {AuthProvider} from './src/context/auth';

function App(): JSX.Element {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
