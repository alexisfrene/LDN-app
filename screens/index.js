import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './Home';
import { LoginScreen } from './Login';
import { ButtonTab } from './ButtonTab';
import { NewProducsScreen } from './NewProducs';
import { ListOfProductsScreen } from './ListOfProducts';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, cardShadowEnabled: false }}
      tabBar={(props) => <ButtonTab {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Crear Producto" component={NewProducsScreen} />
      <Tab.Screen name="Lista de productos" component={ListOfProductsScreen} />
    </Tab.Navigator>
  );
};

export const Screens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, cardShadowEnabled: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Inicio" component={TabScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
