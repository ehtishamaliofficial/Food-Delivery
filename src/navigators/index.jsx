import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Restaurant from '../screens/Restaurant';
import Cart from '../screens/Cart';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Restaurant" component={Restaurant} />
      <Stack.Screen
        name="Cart"
        options={{presentation: 'transparentModal'}}
        component={Cart}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
