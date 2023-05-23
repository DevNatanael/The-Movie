/* eslint-disable react/react-in-jsx-scope */
import {Genres} from '../Screens/Genres';
import {Movie} from '../Screens/Movie';
import {Login} from '../Screens/Login';
import {Register} from '../Screens/Register';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function AppRoutes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Genres" component={Genres} />
      <Stack.Screen name="Movie" component={Movie} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
    </Stack.Navigator>
  );
}

export default AppRoutes;
