/* eslint-disable react/react-in-jsx-scope */
import {Genres} from '../Screens/Genres';
import {Movie} from '../Screens/Movie';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function AppRoutes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Genres">
      <Stack.Screen name="Genres" component={Genres} />
      <Stack.Screen name="Movie" component={Movie} />
    </Stack.Navigator>
  );
}

export default AppRoutes;
