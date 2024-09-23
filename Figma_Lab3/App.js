import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2'

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ManHinh1">
        <Stack.Screen name="ManHinh1" component={Screen1} />
        <Stack.Screen name="ManHinh2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

